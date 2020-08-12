﻿using System;
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
    public class PolicyController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();
        private db_ProjectGladiatorEntities db1 = new db_ProjectGladiatorEntities();


        // GET: api/Policy
        public IQueryable<tbl_Policy> Gettbl_Policy()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Policy;
        }

        // GET: api/Policy/5
        [ResponseType(typeof(tbl_Policy))]
        public IHttpActionResult Gettbl_Policy(int id)
        {
            tbl_Policy tbl_Policy = db.tbl_Policy.Find(id);
            if (tbl_Policy == null)
            {
                return NotFound();
            }

            return Ok(tbl_Policy);
        }

        // PUT: api/Policy/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Policy(int id, tbl_Policy tbl_Policy)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Policy.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_Policy).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_PolicyExists(id))
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

        // POST: api/Policy
        [ResponseType(typeof(tbl_Policy))]
        public IHttpActionResult Posttbl_Policy(tbl_Policy tbl_Policy)
        {
            int[] paymentDetails = new int[5];
            if(tbl_Policy.Policy_Type=="Third Party")
            {
                tbl_Policy.Total_IDV = tbl_Policy.Total_IDV / 50;
            }

           


            tbl_Policy.Policy_Amount = tbl_Policy.Policy_Amount * tbl_Policy.Duration;
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.tbl_Policy.Add(tbl_Policy);
            db.SaveChanges();
            paymentDetails[0] = tbl_Policy.Id;
            paymentDetails[1] = tbl_Policy.Policy_Amount;
            paymentDetails[2] = tbl_Policy.Total_IDV;



            int? vehicleid = db.tbl_Policy.ToList().Find(m => m.Id == tbl_Policy.Id).Veh_Id;

            tbl_VehicleInfo tbl_VehicleInfo = db.tbl_VehicleInfo.Where(m => m.Id == vehicleid).First();

            int? customerId = db.tbl_VehicleInfo.ToList().Find(m => m.Id == vehicleid).Cust_Id;
            tbl_User tbl_User = db.tbl_User.Where(m => m.Id == customerId).First();
            int UserID=tbl_User.Id;

            int? VehicleId = tbl_Policy.Veh_Id;

            //int? vehicleid = db.tbl_Policy.ToList().Find(m => m.Id == tbl_Policy.Id).Veh_Id;

            // tbl_VehicleInfo tbl_VehicleInfo = db.tbl_VehicleInfo.Find(vehicleid);
            paymentDetails[3] = VehicleId.Value;
            paymentDetails[4] = UserID;
            return CreatedAtRoute("DefaultApi", new { id = tbl_Policy.Id }, paymentDetails);
        }

        // DELETE: api/Policy/5
        [ResponseType(typeof(tbl_Policy))]
        public IHttpActionResult Deletetbl_Policy(int id)
        {
            tbl_Policy tbl_Policy = db.tbl_Policy.Find(id);
            if (tbl_Policy == null)
            {
                return NotFound();
            }

            db.tbl_Policy.Remove(tbl_Policy);
            db.SaveChanges();

            return Ok(tbl_Policy);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_PolicyExists(int id)
        {
            return db.tbl_Policy.Count(e => e.Id == id) > 0;
        }
    }
}