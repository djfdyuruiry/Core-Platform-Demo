using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreExample.Models.Extensions
{
    public static class DataExtensions
    {
        public static Task<IEnumerable<CarModel>> GetCars(this DataRepository repo)
        {
            return Task.Run(() =>
            {
                return repo.Cars.AsEnumerable();
            });
        }

        public static Task AddCar(this DataRepository repo, CarModel car)
        {
            return Task.Run(() =>
            {
                repo.Cars.Add(car);
            });
        }

        public static Task<IEnumerable<TaskModel>> GetTasks(this DataRepository repo)
        {
            return Task.Run(() =>
            {
                return repo.Tasks.AsEnumerable();
            });
        }

        public static Task AddTask(this DataRepository repo, TaskModel task)
        {
            return Task.Run(() =>
            {
                repo.Tasks.Add(task);
            });
        }

        public static Task<IEnumerable<CommentModel>> GetComments(this DataRepository repo)
        {
            return Task.Run(() =>
            {
                return repo.Comments.AsEnumerable();
            });
        }

        public static Task AddComment(this DataRepository repo, CommentModel comment)
        {
            return Task.Run(() =>
            {
                repo.Comments.Add(comment);
            });
        }
    }
}