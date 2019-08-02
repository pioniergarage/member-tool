using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MemberTool.Models;
using MemberTool.Models.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace MemberTool
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddDbContext<MemberToolContext>(options => options
                    .UseInMemoryDatabase("MemberTool")
                )
                .AddMvc()
                .AddJsonOptions(
                    options => options.SerializerSettings.ReferenceLoopHandling =
                        Newtonsoft.Json.ReferenceLoopHandling.Ignore
                );

            // Register the Swagger generator, defining 1 or more Swagger documents
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "PionierGarage Member Tool API", Version = "v1" });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                /*
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
                */

                // Enable middleware to serve generated Swagger as a JSON endpoint.
                app.UseSwagger();

                // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), 
                // specifying the Swagger JSON endpoint.
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "PG Member Tool v1");
                });

                // Fill with seed data
                using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var context = serviceScope.ServiceProvider.GetService<MemberToolContext>();
                    context.Database.EnsureCreated();
                    EnsureSeedData(context);
                }
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 
                    && !Path.HasExtension(context.Request.Path.Value)
                    && !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseMvcWithDefaultRoute();

            app.UseDefaultFiles();
            app.UseStaticFiles();
        }


        private void EnsureSeedData(MemberToolContext context)
        {
            if (context.Persons.Any())
                return;

            var role1 = new PGRole
            {
                Id = "23",
                Name = "Head of Sales"
            };
            var role2 = new PGRole
            {
                Id = "17",
                Name = "Sales Member"
            };
            var role3 = new PGRole
            {
                Id = "18",
                Name = "Alumnus"
            };

            var project1 = new CurrentProject{
                Id = 1,
                Name = "Member Tool",
                Url = "https://github.com/pioniergarage/member-tool"
            };
            var project2 = new CurrentProject{
                Id = 2,
                Name = "DSGVO"
            }:

            context.Persons.Add(new Person
            {
                Id = "77",
                Name = "Gustav Gans",
                CurrentPGRole = role1,
                MemberSince = new DateTime(2016, 04, 12, 12, 14, 37),
                UserImgPath = "https://pioniergarage.de/wp-content/uploads/PG-Team-40-1.jpg",
                CurrentProjects = new List<CurrentProject>{ project1, project2 },
                PGRoles = new List<PGRole>{ role1, role2 },
                Email = "gustav.gans@pioniergarage.de",
                LinkedIn = "http://example.org",
                Location = "Karlsruhe"
            });
            context.Persons.Add(new Person
            {
                Id = "111",
                Name = "Franz Gans",
                CurrentPGRole = role3,
                MemberSince = new DateTime(2018, 01, 23, 09, 50, 45),
                UserImgPath = "https://pioniergarage.de/wp-content/uploads/PG-Team-40-1.jpg",
                CurrentProjects = new List<CurrentProject>{ project1, project2 },
                PGRoles = new List<PGRole>{ role2, role3 },
                Email = "franz.gans@pioniergarage.de",
                LinkedIn = "http://example.org",
                Location = "Karlsruhe"
            });

            context.SaveChanges();
        }
    }
}
