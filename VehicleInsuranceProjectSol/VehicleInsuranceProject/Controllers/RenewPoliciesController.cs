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
    public class RenewPoliciesController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/RenewPolicies
        public IQueryable<tbl_RenewPolicies> Gettbl_RenewPolicies()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_RenewPolicies;
        }

        // GET: api/RenewPolicies/5
        [ResponseType(typeof(tbl_RenewPolicies))]
        public IHttpActionResult Gettbl_RenewPolicies(int id)
        {
            tbl_RenewPolicies tbl_RenewPolicies = db.tbl_RenewPolicies.Find(id);
            if (tbl_RenewPolicies == null)
            {
                return NotFound();
            }

            return Ok(tbl_RenewPolicies);
        }

        // PUT: api/RenewPolicies/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_RenewPolicies(int id, tbl_RenewPolicies tbl_RenewPolicies)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_RenewPolicies.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_RenewPolicies).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_RenewPoliciesExists(id))
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

        // POST: api/RenewPolicies
        [ResponseType(typeof(tbl_RenewPolicies))]
        public IHttpActionResult Posttbl_RenewPolicies(tbl_RenewPolicies tbl_RenewPolicies)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            int[] paymentDetails = new int[5];
            int? previousPolicyId=tbl_RenewPolicies.previousPolicyId;
            tbl_Policies tbl_policy = db.tbl_Policies.Where(m => m.Id == previousPolicyId).First();

            if (tbl_RenewPoliciesExists(previousPolicyId.Value))
            {
                return NotFound();
            }

           
            tbl_RenewPolicies.Policy_Type = tbl_policy.Policy_Type;
            tbl_RenewPolicies.Veh_Id = tbl_policy.Veh_Id;
            tbl_RenewPolicies.Policy_Amount = ((tbl_policy.Policy_Amount) - tbl_policy.Policy_Amount * 4/100);



            tbl_RenewPolicies.Policy_StartDate = DateTime.Now;
            tbl_RenewPolicies.Policy_Purchase_Date = DateTime.Now;
            tbl_RenewPolicies.Total_IDV = ((tbl_policy.Total_IDV-tbl_policy.Total_IDV*5/100));
            int duration =tbl_RenewPolicies.Duration.Value;

            tbl_RenewPolicies.Policy_Expiry_Date = tbl_RenewPolicies.Policy_Purchase_Date.Value.AddDays(duration);



            tbl_RenewPolicies.Policy_Approve_Status = "Yet To Be Approved";
            tbl_RenewPolicies.Policy_Payment_Status = "Not Done";
            tbl_RenewPolicies.Cust_Id = tbl_policy.Cust_Id;

            

            db.tbl_RenewPolicies.Add(tbl_RenewPolicies);
            db.SaveChanges();
            paymentDetails[0] = tbl_RenewPolicies.Id;
            paymentDetails[1] = tbl_RenewPolicies.Policy_Amount;
            paymentDetails[2] = tbl_RenewPolicies.Total_IDV.Value;
            paymentDetails[3] = tbl_RenewPolicies.Veh_Id.Value;
            paymentDetails[4] = tbl_RenewPolicies.Cust_Id.Value;


            return CreatedAtRoute("DefaultApi", new { id = tbl_RenewPolicies.Id }, paymentDetails);
        }

        // DELETE: api/RenewPolicies/5
        [ResponseType(typeof(tbl_RenewPolicies))]
        public IHttpActionResult Deletetbl_RenewPolicies(int id)
        {
            tbl_RenewPolicies tbl_RenewPolicies = db.tbl_RenewPolicies.Find(id);
            if (tbl_RenewPolicies == null)
            {
                return NotFound();
            }

            db.tbl_RenewPolicies.Remove(tbl_RenewPolicies);
            db.SaveChanges();

            return Ok(tbl_RenewPolicies);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_RenewPoliciesExists(int id)
        {
            return db.tbl_RenewPolicies.Count(e => e.Id == id) > 0;
        }
    }
}