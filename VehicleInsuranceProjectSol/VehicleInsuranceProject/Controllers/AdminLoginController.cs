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

namespace VehicleInsuranceProject.Controllers
{
    public class AdminLoginController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/AdminLogin
        public IQueryable<tbl_Admin> Gettbl_Admin()
        {
            return db.tbl_Admin;
        }

        // GET: api/AdminLogin/5
        [ResponseType(typeof(tbl_Admin))]
        public IHttpActionResult Gettbl_Admin(string id)
        {
            tbl_Admin tbl_Admin = db.tbl_Admin.Find(id);
            if (tbl_Admin == null)
            {
                return NotFound();
            }

            return Ok(tbl_Admin);
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


                int myUser = db.tbl_User.Where(u => u.Email == tbl_Admin.Email && u.Password == tbl_Admin.Password).Count();

                tbl_User tbl_User2 = db.tbl_User.ToList().Find(u => u.Email == tbl_Admin.Email && u.Password == tbl_Admin.Password);


                if (tbl_User2 == null)
                {
                    return NotFound();
                }

                if (myUser == 1)
                {
                    //tbl_User tbl_User1 = db.tbl_User.Find(email);
                    return Ok(tbl_User2.Id);

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