using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoreExample.Controllers
{
    public class HomeController : Controller
    {
        public Task<IActionResult> Index()
        {
            return Task.Run(() =>
            {
                return (IActionResult)View();
            });
        }

        public Task<IActionResult> Error()
        {
            return Task.Run(() =>
            {
                return (IActionResult)View();
            });
        }
    }
}