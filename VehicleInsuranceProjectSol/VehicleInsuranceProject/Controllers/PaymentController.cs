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
    public class PaymentController : ApiController
    {
        private db_ProjectGladiatorEntities db = new db_ProjectGladiatorEntities();

        // GET: api/Payment
        public IQueryable<tbl_Payment> Gettbl_Payment()
        {
            db.Configuration.ProxyCreationEnabled = false;
            return db.tbl_Payment;
        }

        // GET: api/Payment/5
        [ResponseType(typeof(tbl_Payment))]
        public IHttpActionResult Gettbl_Payment(int id)
        {
            tbl_Payment tbl_Payment = db.tbl_Payment.Find(id);
            if (tbl_Payment == null)
            {
                return NotFound();
            }

            return Ok(tbl_Payment);
        }

        // PUT: api/Payment/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Puttbl_Payment(int id, tbl_Payment tbl_Payment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tbl_Payment.Id)
            {
                return BadRequest();
            }

            db.Entry(tbl_Payment).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!tbl_PaymentExists(id))
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

        // POST: api/Payment
        [ResponseType(typeof(tbl_Payment))]
        public IHttpActionResult Posttbl_Payment(tbl_Payment tbl_Payment)
        {
            List<string> successDetails = new List<string>();
            string[] success = new string[6];
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            tbl_Payment.Payment_Date = DateTime.Now;
            tbl_Payment.Payment_Status = "Done";
            db.tbl_Payment.Add(tbl_Payment);
            db.SaveChanges();

            //int? vehicleid = db.tbl_Policy.ToList().Find(m => m.Id == tbl_Policy.Id).Veh_Id;
            //tbl_VehicleInfo tbl_VehicleInfo = db.tbl_VehicleInfo.Where(m => m.Id == vehicleid).First();
            //int? customerId = db.tbl_VehicleInfo.ToList().Find(m => m.Id == vehicleid).Cust_Id;

            int? policyid = db.tbl_Payment.ToList().Find(m => m.Id == tbl_Payment.Id).Pol_Id;

            tbl_Policies tbl_Policiesss = db.tbl_Policies.Find(policyid);
            if (tbl_Policiesss == null)
            {
                return NotFound();
            }

            tbl_Policies tbl_Policy = db.tbl_Policies.Where(m => m.Id == policyid).First();

            int? vehicleId = db.tbl_Policies.ToList().Find(m => m.Id == policyid).Veh_Id;
            tbl_VehicleInfo tbl_VehicleInfo2 = db.tbl_VehicleInfo.Where(m => m.Id == vehicleId).First();
            int? customerId = db.tbl_VehicleInfo.ToList().Find(m => m.Id == vehicleId).Cust_Id;


            tbl_User tbl_User = db.tbl_User.Where(m => m.Id == customerId).First();

            string carModel = tbl_VehicleInfo2.Veh_Model;
            string carManufacturer = tbl_VehicleInfo2.Manufacturer;
            string registerationNumber = tbl_VehicleInfo2.Registration_Number;
            string userName = tbl_User.Firstname;

            success[0]= carModel;
            success[1] = carManufacturer;
            success[2] = registerationNumber;
            success[3] = userName;
            success[4] = tbl_Payment.Pol_Id.Value.ToString();
            success[5] = tbl_Payment.Id.ToString();
           

            //db.sp_paymentStatuses(tbl_Payment.Pol_Id);
            db.sp_PaymentStatuss(tbl_Payment.Pol_Id);
           // db.sp_paymentStatusesforRenew(tbl_Payment.Pol_Id);

            return CreatedAtRoute("DefaultApi", new { id = tbl_Payment.Id }, success);
        }

        // DELETE: api/Payment/5
        [ResponseType(typeof(tbl_Payment))]
        public IHttpActionResult Deletetbl_Payment(int id)
        {
            tbl_Payment tbl_Payment = db.tbl_Payment.Find(id);
            if (tbl_Payment == null)
            {
                return NotFound();
            }

            db.tbl_Payment.Remove(tbl_Payment);
            db.SaveChanges();

            return Ok(tbl_Payment);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool tbl_PaymentExists(int id)
        {
            return db.tbl_Payment.Count(e => e.Id == id) > 0;
        }
    }
}