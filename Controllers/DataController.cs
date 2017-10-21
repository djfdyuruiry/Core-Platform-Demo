using System.Collections.Generic;
using System.Threading.Tasks;
using CoreExample.Models;
using CoreExample.Models.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace CoreExample.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        private DataRepository _repo;

        public DataController(DataRepository repo)
        {
            this._repo = repo;
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<CarModel>> GetCars()
        {
            return await _repo.GetCars();
        }

        [HttpPost("[action]")]
        public async Task<ObjectResult> AddCar([FromBody]CarModel car)
        {
            await _repo.AddCar(car);
            return Created("/api/Data/AddCar", car);
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<TaskModel>> GetTasks()
        {
            return await _repo.GetTasks();
        }

        [HttpPost("[action]")]
        public async Task<ObjectResult> AddTask([FromBody]TaskModel task)
        {
            await _repo.AddTask(task);
            return Created("/api/Data/AddTask", task);
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<CommentModel>> GetComments()
        {
            return await _repo.GetComments();
        }

        [HttpPost("[action]")]
        public async Task<ObjectResult> AddComment([FromBody]CommentModel comment)
        {
            await _repo.AddComment(comment);
            return Created("/api/Data/AddComment", comment);
        }
    }
}