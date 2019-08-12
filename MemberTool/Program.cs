using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace MemberTool
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder BuildWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>();
    }
}
