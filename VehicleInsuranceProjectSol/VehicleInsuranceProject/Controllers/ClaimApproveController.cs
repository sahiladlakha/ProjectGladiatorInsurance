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
    public class ClaimApproveController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/ClaimAprrove
        public IQueryable<tbl_Claims> Gettbl_Claims()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Claims;
        }

        // GET: api/ClaimAprrove/5
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Gettbl_Claims(int id)
        {
           
            

            tbl_Claims tbl_Claims = db.tbl_Claims.Find(id);
            if (tbl_Claims == null)
            {
                return NotFound();
            }
            //db.sp_claimApprove(id);
            try
            {
                db.SaveChanges();
            }

            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_ClaimsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok(db.us_claimDetailsofAllUsers());
        }

        // PUT: api/ClaimAprrove/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Claims(int id, tbl_Claims tbl_Claims)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Claims.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_Claims).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_ClaimsExists(id))
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

        // POST: api/ClaimAprrove
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Posttbl_Claims(tbl_Claims tbl_Claims)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            int approvedAmount = tbl_Claims.Claim_Amount;
            int claimId = tbl_Claims.Id;
            db.us_claimApprovewithAmount(claimId,approvedAmount);
           // db.tbl_Claims.Add(tbl_Claims);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tbl_Claims.Id }, approvedAmount);
        }

        // DELETE: api/ClaimAprrove/5
        [ResponseType(typeof(tbl_Claims))]
        public IHttpActionResult Deletetbl_Claims(int id)
        {
            tbl_Claims tbl_Claims = db.tbl_Claims.Find(id);
            if (tbl_Claims == null)
            {
                return NotFound();
            }

            db.tbl_Claims.Remove(tbl_Claims);
            db.SaveChanges();

            return Ok(tbl_Claims);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_ClaimsExists(int id)
        {
            return db.tbl_Claims.Count(e => e.Id == id) > 0;
        }
    }
}