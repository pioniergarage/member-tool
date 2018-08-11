using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });

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

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
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

            context.Persons.Add(new Person
            {
                Id = "77",
                Name = "Gustav Gans",
                CurrentPGRole = role1,
                PGRoles = new List<PGRole>{ role1, role2 },
                MemberSince = new DateTime(2016, 04, 12, 12, 14, 37),
                Email = "gustav.gans@pioniergarage.de",
                Description = "Das ist der liebe Gustav. Den ham alle lieb",
                Answers = new List<QuestionAnswer>{ new QuestionAnswer
                {
                    Id = "109", 
                    Answer = "Wer wenn nicht Lackey",
                    Question = new Question
                    {
                        Id = "55",
                        QuestionString = "Welches Startup gefällt dir am besten?"
                    }
                }},
            });
            context.Persons.Add(new Person
            {
                Id = "111",
                Name = "Franz Gans",
                CurrentPGRole = role2,
                PGRoles = new List<PGRole> { role2 },
                MemberSince = new DateTime(2018, 01, 23, 09, 50, 45),
                Email = "franz.gans@pioniergarage.de",
                Description = "Der Franz ist auch noch da"
            });

            context.SaveChanges();
        }
    }
}
