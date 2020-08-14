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
    public class RenewedPolicyController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/RenewedPolicy
        public IQueryable<tbl_User> Gettbl_User()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_User;
        }

        // GET: api/RenewedPolicy/5
        [ResponseType(typeof(tbl_User))]
        public IHttpActionResult Gettbl_User(int id)
        {
            tbl_User tbl_User = db.tbl_User.Find(id);
            if (tbl_User == null)
            {
                return NotFound();
            }


            //return Ok(db.usp_ClaimDetails(id));
            return Ok(db.usp_RenewDetails(id));
        }

        // PUT: api/RenewedPolicy/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_User(int id, tbl_User tbl_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_User.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_User).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_UserExists(id))
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

        // POST: api/RenewedPolicy
        [ResponseType(typeof(tbl_User))]
        public IHttpActionResult Posttbl_User(tbl_User tbl_User)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tbl_User.Add(tbl_User);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tbl_User.Id }, tbl_User);
        }

        // DELETE: api/RenewedPolicy/5
        [ResponseType(typeof(tbl_User))]
        public IHttpActionResult Deletetbl_User(int id)
        {
            tbl_User tbl_User = db.tbl_User.Find(id);
            if (tbl_User == null)
            {
                return NotFound();
            }

            db.tbl_User.Remove(tbl_User);
            db.SaveChanges();

            return Ok(tbl_User);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_UserExists(int id)
        {
            return db.tbl_User.Count(e => e.Id == id) > 0;
        }
    }
}