using System.Collections.Generic;
using System.Threading.Tasks;

namespace CoreExample.Models
{
    public class DataRepository
    {
        public List<CarModel> Cars { get; set; }
        public List<TaskModel> Tasks { get; set; }

        public List<CommentModel> Comments { get; set; }

        public DataRepository()
        {
            InitializeCars();
            InitializeTasks();
            InitializeComments();
        }

        private void InitializeCars()
        {
            this.Cars = new List<CarModel>()
            {
                new CarModel
                {
                    make = "McClaren",
                    model = "P1",
                    url = "http://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-car/image/2015/02/buyers_guide_-_mclaren_p1_2014_-_front_quarter.jpg?itok=gSl3mI9a",
                    source = "https://en.wikipedia.org/wiki/McLaren_P1",
                    description = @"The McLaren P1 is a British limited-production plug-in hybrid sports car produced by McLaren. 
                                The concept car was capable of reaching speeds of 218 mph (351 km/h) with the limiter on. 
                                The P1 features a 3.8-litre twin-turbo V8 petrol engine. The twin turbos boost the petrol engine 
                                at 1.4 bar to deliver 727 bhp (737 PS; 542 kW) and 531 lb·ft (720 N·m) of torque at 7,500 rpm, combined 
                                with an in-house developed electric motor producing 177 bhp (179 PS; 132 kW) and 192 lb·ft (260 N·m). 
                                With both engine and the electric motor, the P1 has a total power and torque output of 904 bhp (917 PS; 674 kW) 
                                and 723 lb·ft (980 N·m) of torque respectively."
                },
                new CarModel
                {
                    make = "Porsche",
                    model = "918 Spyder",
                    url = "http://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news/image/2015/04/Large%20Image_9581.jpg?itok=aQqGWV34",
                    source = "https://en.wikipedia.org/wiki/Porsche_918_Spyder",
                    description = @"The Porsche 918 Spyder is a mid-engined plug-in hybrid sports car by Porsche. 
                                The Spyder is powered by a naturally aspirated 4.6-litre V8 engine, developing 608 metric horsepower (447 kW), 
                                with two electric motors delivering an additional 279 metric horsepower (205 kW) for a combined output of 887 
                                metric horsepower (652 kW). The 918 Spyder's 6.8 kWh lithium-ion battery pack delivers an all-electric range 
                                of 19 km (12 mi) under EPA's five-cycle tests. The car has a top speed of around 340 km/h (210 mph)."
                },
                new CarModel
                {
                    make = "Lamborghini",
                    model = "Veneno",
                    url = "http://www.topgear.com/sites/default/files/styles/16x9_1280w/public/news/image/2015/04/Large%20Image_9665.jpg?itok=Bqxc5GrG",
                    source = "https://en.wikipedia.org/wiki/Lamborghini_Aventador#Veneno",
                    description = @"The Lamborghini Veneno is a limited production supercar based on the Lamborghini Aventador and was built to celebrate 
                                Lamborghini’s 50th anniversary. When introduced in 2013 at a price of US$4,500,000, it was the most expensive production 
                                car in the world. he prototype, Car Zero, is finished in grey and includes an Italian flag vinyl on both sides of the car. 
                                The engine is a development of the Aventador's 6.5 L V12 and produces 750 PS (552 kW; 740 bhp)."
                },
                new CarModel
                {
                    make = "Ferrari",
                    model = "LaFerrari",
                    url = "http://www.topgear.com/sites/default/files/styles/16x9_1280w/public/cars-road-test/image/2015/04/Large%20Image_138.jpg?itok=mGvfDq3x",
                    source = "https://en.wikipedia.org/wiki/LaFerrari",
                    description = @"LaFerrari is the first mild hybrid from Ferrari, providing the highest power output of any Ferrari whilst decreasing fuel 
                                consumption by 40 percent. LaFerrari's internal combustion engine is a mid-rear mounted Ferrari F140 65° V12 with a 6.3-litre 
                                (6262 cc) capacity producing 800 PS (588 kW, 789 bhp) @ 9000 rpm and 700 N·m (520 lbf·ft) of torque @ 6,750 rpm, supplemented 
                                by a 163 PS (120 kW; 161 bhp) KERS unit (called HY-KERS), which will provide short bursts of extra power.[25] The KERS system 
                                adds extra power to the combustion engine's output level for a total of 963 PS (708 kW; 950 bhp) and a combined torque of 
                                900 N·m (664 lb·ft)."
                }
            };
        }

        private void InitializeTasks()
        {
            this.Tasks = new List<TaskModel>()
            {
                new TaskModel
                {
                    title = "First Task",
                    completed = true
                },
                new TaskModel
                {
                    title = "Second Task",
                    completed = true
                },
                new TaskModel
                {
                    title = "Third Task",
                    completed = false
                },
                new TaskModel
                {
                    title = "Fourth Task",
                    completed = false
                },
                new TaskModel
                {
                    title = "Fifth Task",
                    completed = false
                }
            };
        }

        private void InitializeComments()
        {
            this.Comments = new List<CommentModel>()
            {
                new CommentModel
                {
                    name = "Jaime",
                    comment = "Sweet cars!"
                },
                new CommentModel
                {
                    name = "Chris",
                    comment = "My money is on the Lambo being the most fun to drive!"
                },
                new CommentModel
                {
                    name = "Jeremy",
                    comment = "Are you daft?!? The P1 is a terrifyingly amazing machine!"
                }
            };
        }
    }
}