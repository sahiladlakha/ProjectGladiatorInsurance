using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Serialization;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using VehicleInsuranceProject.Models;

namespace VehicleInsuranceProject.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class AdminLoginController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/AdminLogin
        public IHttpActionResult Gettbl_Admin()
        {
            return Ok(db.us_claimDetailsofAllUsers());
            
        }

        // GET: api/AdminLogin/5
        [ResponseType(typeof(tbl_Admin))]
        public IHttpActionResult Gettbl_Admin(string id)
        {
            
            //tbl_Admin tbl_Admin = db.tbl_Admin.Find(id);
            //if (tbl_Admin == null)
            //{
            //    return NotFound();
            //}
            int claimid = Convert.ToInt32(id);
            db.us_claimDecline(claimid);
            return Ok(claimid);
        }

        // PUT: api/AdminLogin/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Admin(string id, tbl_Admin tbl_Admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Admin.Email)
            {
                return BadRequest();
            }

            db.Entry(tbl_Admin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_AdminExists(id))
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

        // POST: api/AdminLogin
        [ResponseType(typeof(tbl_Admin))]
        public IHttpActionResult Posttbl_Admin(tbl_Admin tbl_Admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            try
            {
                string email = tbl_Admin.Email;


                int myUser = db.tbl_Admin.Where(u => u.Email == tbl_Admin.Email && u.Password == tbl_Admin.Password).Count();


                tbl_Admin tbl_User2 = db.tbl_Admin.ToList().Find(u => u.Email == tbl_Admin.Email && u.Password == tbl_Admin.Password);


                if (myUser == 0)
                {
                    return NotFound();
                }

                if (myUser == 1)
                {
                    //tbl_User tbl_User1 = db.tbl_User.Find(email);
                    return Ok(tbl_User2.Email);

                }

                else
                {
                    return NotFound();
                }

            }

          //  db.tbl_Admin.Add(tbl_Admin);

            
            catch (DbUpdateException)
            {
                if (tbl_AdminExists(tbl_Admin.Email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

           // return CreatedAtRoute("DefaultApi", new { id = tbl_Admin.Email }, tbl_Admin);
        }

        // DELETE: api/AdminLogin/5
        [ResponseType(typeof(tbl_Admin))]
        public IHttpActionResult Deletetbl_Admin(string id)
        {
            tbl_Admin tbl_Admin = db.tbl_Admin.Find(id);
            if (tbl_Admin == null)
            {
                return NotFound();
            }

            db.tbl_Admin.Remove(tbl_Admin);
            db.SaveChanges();

            return Ok(tbl_Admin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_AdminExists(string id)
        {
            return db.tbl_Admin.Count(e => e.Email == id) > 0;
        }
    }
}