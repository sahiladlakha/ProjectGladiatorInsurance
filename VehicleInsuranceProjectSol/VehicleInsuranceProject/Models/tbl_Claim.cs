//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace VehicleInsuranceProject.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_Claim
    {
        public int Id { get; set; }
        public string Reason_of_Claim { get; set; }
        public System.DateTime Date_Of_Claim { get; set; }
        public string Claim_Approved { get; set; }
        public int Claim_Amount { get; set; }
        public Nullable<int> Pol_Id { get; set; }
    
        public virtual tbl_Policy tbl_Policy { get; set; }
    }
}
