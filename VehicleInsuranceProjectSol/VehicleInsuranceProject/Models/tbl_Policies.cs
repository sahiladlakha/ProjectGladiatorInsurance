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
    using System.Runtime.Serialization;

    [DataContract]
    public partial class tbl_Policies
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public tbl_Policies()
        {
            this.tbl_Claims = new HashSet<tbl_Claims>();
            this.tbl_Payment = new HashSet<tbl_Payment>();
            this.tbl_RenewPolicy = new HashSet<tbl_RenewPolicy>();
        }
    [DataMember]
        public int Id { get; set; }
        [DataMember]
        public string Policy_Type { get; set; }
        [DataMember]
        public int Duration { get; set; }
        [DataMember]
        public Nullable<int> Veh_Id { get; set; }
        [DataMember]
        public int Policy_Amount { get; set; }
        [DataMember]
        public System.DateTime Policy_Date { get; set; }
        [DataMember]
        public System.DateTime Policy_Purchase_Date { get; set; }
        [DataMember]
        public int Total_IDV { get; set; }
        [DataMember]
        public Nullable<System.DateTime> Policy_Expiry_Date { get; set; }
        [DataMember]
        public string Approved_By { get; set; }
        [DataMember]
        public string Policy_Approve_Status { get; set; }
        [DataMember]
        public string Policy_Payment_Status { get; set; }
        [DataMember]
        public Nullable<int> Cust_Id { get; set; }
        [DataMember]
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Claims> tbl_Claims { get; set; }
        [DataMember]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_Payment> tbl_Payment { get; set; }
        [DataMember]
        public virtual tbl_User tbl_User { get; set; }
        [DataMember]
        public virtual tbl_VehicleInfo tbl_VehicleInfo { get; set; }
        [DataMember]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tbl_RenewPolicy> tbl_RenewPolicy { get; set; }
    }
}