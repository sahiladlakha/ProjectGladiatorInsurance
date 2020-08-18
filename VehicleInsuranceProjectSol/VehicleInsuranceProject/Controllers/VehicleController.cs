using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using VehicleInsuranceProject.Models;
using System.Web.Http.Cors;
using System.Globalization;

namespace VehicleInsuranceProject.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class VehicleController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/Vehicle
        public IQueryable<tbl_VehicleInfo> Gettbl_VehicleInfo()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_VehicleInfo;
        }

        // GET: api/Vehicle/5
        [ResponseType(typeof(tbl_VehicleInfo))]
        public IHttpActionResult Gettbl_VehicleInfo(int id)
        {
            tbl_VehicleInfo tbl_VehicleInfo = db.tbl_VehicleInfo.Find(id);
            if (tbl_VehicleInfo == null)
            {
                return NotFound();
            }

            return Ok(tbl_VehicleInfo);
        }

        // PUT: api/Vehicle/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_VehicleInfo(int id, tbl_VehicleInfo tbl_VehicleInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_VehicleInfo.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_VehicleInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_VehicleInfoExists(id))
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

        // POST: api/Vehicle
        [ResponseType(typeof(tbl_VehicleInfo))]
        public IHttpActionResult Posttbl_VehicleInfo(tbl_VehicleInfo tbl_VehicleInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            string x = tbl_VehicleInfo.Purchase_Date.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture);
            DateTime oDate = Convert.ToDateTime(x);
            tbl_VehicleInfo.Purchase_Date = oDate;
            int value = DateTime.Compare(tbl_VehicleInfo.Purchase_Date, DateTime.Now);
            if(value>0)
            {
                tbl_VehicleInfo.Purchase_Date = DateTime.Now.AddDays(-1);
            }
            tbl_VehicleInfo.Vehicle_Type = "Four Wheeler";
            string model = tbl_VehicleInfo.Veh_Model;
           
            tbl_Vehicle_Price tbl_vehicleprice = db.tbl_Vehicle_Price.Find(model);
            if(tbl_vehicleprice==null)
            {
               return BadRequest();
            }
            int showroomPrice = tbl_vehicleprice.Vehicle_Showroom_Price;
            
            
            DateTime now = DateTime.Now;
            int year = now.Year;
            int purchase = tbl_VehicleInfo.Purchase_Date.Year;
            float difference = year - purchase;

            int IDV = 0;
            int policyPrice = 0;
            int[] bothPrice = new int[4]; 


            if (difference < 1)
            {
                IDV = ((showroomPrice)- showroomPrice * 8/100);

                

            }

            if (difference >= 1 && difference <= 2)
            {
                IDV = ((showroomPrice) - showroomPrice * 11/ 100);

            }

            if (difference > 2 && difference <= 3)
            {
                IDV = ((showroomPrice) - showroomPrice * 14/ 100);

            }

            if (difference > 3 && difference <= 4)
            {
                IDV = ((showroomPrice) - showroomPrice * 16 / 100);

            }


            if (difference> 4 && difference <= 5)
            {
                IDV = ((showroomPrice) - showroomPrice * 18 / 100);
            }


            if (difference > 5 && difference <= 6)
            {
                IDV = ((showroomPrice) - showroomPrice * 25/ 100);

            }

            if (difference > 6)
            {
                {
                    IDV = ((showroomPrice) - showroomPrice*60/100);

                }

            }

            


            policyPrice = IDV/60;


            if (policyPrice > 50000)
            {
                policyPrice = 45890;
            }

            if (policyPrice<1000)
            {
                policyPrice = 3500;
            }
           if(IDV<20000)
            {
                IDV = 25000;
            }
            bothPrice[0] = IDV;
            bothPrice[1] = policyPrice;
            



            db.tbl_VehicleInfo.Add(tbl_VehicleInfo);
            db.SaveChanges();
            bothPrice[2] = tbl_VehicleInfo.Id;
            bothPrice[3] = tbl_VehicleInfo.Cust_Id.Value;

            return CreatedAtRoute("DefaultApi", new { id = tbl_VehicleInfo.Id }, bothPrice);
        }

        // DELETE: api/Vehicle/5
        [ResponseType(typeof(tbl_VehicleInfo))]
        public IHttpActionResult Deletetbl_VehicleInfo(int id)
        {
            tbl_VehicleInfo tbl_VehicleInfo = db.tbl_VehicleInfo.Find(id);
            if (tbl_VehicleInfo == null)
            {
                return NotFound();
            }

            db.tbl_VehicleInfo.Remove(tbl_VehicleInfo);
            db.SaveChanges();

            return Ok(tbl_VehicleInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_VehicleInfoExists(int id)
        {
            return db.tbl_VehicleInfo.Count(e => e.Id == id) > 0;
        }
    }
}