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
    public class InsertVehicleModelController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/InsertVehicleModel
        public IQueryable<tbl_Vehicle_Price> Gettbl_Vehicle_Price()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Vehicle_Price;
        }

        // GET: api/InsertVehicleModel/5
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

        // PUT: api/InsertVehicleModel/5
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

        // POST: api/InsertVehicleModel
        [ResponseType(typeof(tbl_Vehicle_Price))]
        public IHttpActionResult Posttbl_Vehicle_Price(tbl_Vehicle_Price tbl_Vehicle_Price)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tbl_Vehicle_Price.Add(tbl_Vehicle_Price);

            try
            {
                db.SaveChanges();
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

            return CreatedAtRoute("DefaultApi", new { id = tbl_Vehicle_Price.Vehicle_Model }, tbl_Vehicle_Price);
        }

        // DELETE: api/InsertVehicleModel/5
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