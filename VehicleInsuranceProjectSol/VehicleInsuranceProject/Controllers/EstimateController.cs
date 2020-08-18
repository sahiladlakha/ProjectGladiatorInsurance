using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using VehicleInsuranceProject.Models;

namespace VehicleInsuranceProject.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class EstimateController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/Estimate
        public IQueryable<tbl_Vehicle_Price> Gettbl_Vehicle_Price()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Vehicle_Price;
        }

        // GET: api/Estimate/5
        [ResponseType(typeof(tbl_Vehicle_Price))]
        public IHttpActionResult Gettbl_Vehicle_Price(string id)
        {
            tbl_Vehicle_Price tbl_Vehicle_Price = db.tbl_Vehicle_Price.Find(id);
            if (tbl_Vehicle_Price == null)
            {
                return NotFound();
            }

            return Ok(tbl_Vehicle_Price);
        }

        // PUT: api/Estimate/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Vehicle_Price(string id, tbl_Vehicle_Price tbl_Vehicle_Price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Vehicle_Price.Vehicle_Model)
            {
                return BadRequest();
            }

            db.Entry(tbl_Vehicle_Price).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_Vehicle_PriceExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Estimate
        [ResponseType(typeof(tbl_Vehicle_Price))]
        public IHttpActionResult Posttbl_Vehicle_Price(tbl_Vehicle_Price tbl_Vehicle_Price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // db.tbl_Vehicle_Price.Add(tbl_Vehicle_Price);



            int[] bothPrice = new int[2];
            // double age = 0;
            int policyPrice = 0;
            int IDV = 0;

            string model = tbl_Vehicle_Price.Vehicle_Model;
            



            tbl_Vehicle_Price tbl_VehiclePrice3 = db.tbl_Vehicle_Price.Find(model);
            if (tbl_VehiclePrice3 == null)
            {
                return BadRequest();
            }

            if (tbl_VehiclePrice3==null)

            {
                return BadRequest();

            }
            int showroomPrice = tbl_VehiclePrice3.Vehicle_Showroom_Price;
            double? difference = tbl_Vehicle_Price.Vehicle_Age;

            try
            {
                if (difference < 1)
                {
                    IDV = ((showroomPrice) - showroomPrice * 8 / 100);



                }

                if (difference >= 1 && difference <= 2)
                {
                    IDV = ((showroomPrice) - showroomPrice * 11 / 100);

                }

                if (difference > 2 && difference <= 3)
                {
                    IDV = ((showroomPrice) - showroomPrice * 14 / 100);

                }

                if (difference > 3 && difference <= 4)
                {
                    IDV = ((showroomPrice) - showroomPrice * 16 / 100);

                }


                if (difference > 4 && difference <= 5)
                {
                    IDV = ((showroomPrice) - showroomPrice * 18 / 100);
                }


                if (difference > 5 && difference <= 6)
                {
                    IDV = ((showroomPrice) - showroomPrice * 25 / 100);

                }

                if (difference > 6)
                {
                    {
                        IDV = ((showroomPrice) - showroomPrice * 60 / 100);

                    }

                }




                policyPrice = IDV / 60;

                if (policyPrice < 1000)
                {
                    policyPrice = 3500;
                }


                if (policyPrice >50000)
                {
                    policyPrice = 45890;
                }

                if (IDV < 20000)
                {
                    IDV = 25000;
                }



                if(policyPrice>IDV)
                {
                    IDV = IDV + 10000;
                }
                bothPrice[0] = IDV;
                bothPrice[1] = policyPrice;
            }
            catch (DbUpdateException)
            {
                if (tbl_Vehicle_PriceExists(tbl_Vehicle_Price.Vehicle_Model))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = tbl_Vehicle_Price.Vehicle_Model },bothPrice);
        }

        // DELETE: api/Estimate/5
        [ResponseType(typeof(tbl_Vehicle_Price))]
        public IHttpActionResult Deletetbl_Vehicle_Price(string id)
        {
            tbl_Vehicle_Price tbl_Vehicle_Price = db.tbl_Vehicle_Price.Find(id);
            if (tbl_Vehicle_Price == null)
            {
                return NotFound();
            }

            db.tbl_Vehicle_Price.Remove(tbl_Vehicle_Price);
            db.SaveChanges();

            return Ok(tbl_Vehicle_Price);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_Vehicle_PriceExists(string id)
        {
            return db.tbl_Vehicle_Price.Count(e => e.Vehicle_Model == id) > 0;
        }
    }
}