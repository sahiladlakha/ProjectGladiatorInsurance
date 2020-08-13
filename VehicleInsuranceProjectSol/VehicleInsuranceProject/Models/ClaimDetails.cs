using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


using System.Runtime.Serialization;

namespace VehicleInsuranceProject.Models
{
    [DataContract]
    public class ClaimDetails
    {
        public int PolicyNumber { get; set; }
        [DataMember]
        public string VehicleModel { get; set; }
        [DataMember]
        public int RegistrationNumber { get; set; }

        [DataMember]
        public int ClaimAmount { get; set; }

    }
}