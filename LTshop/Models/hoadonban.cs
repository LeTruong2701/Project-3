//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace LTshop.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class hoadonban
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public hoadonban()
        {
            this.chitiethoadonbans = new HashSet<chitiethoadonban>();
        }
    
        public int mahdb { get; set; }
        public Nullable<int> manv { get; set; }
        public Nullable<int> makh { get; set; }
        public Nullable<double> tongtien { get; set; }
        public Nullable<System.DateTime> created_at { get; set; }
        public string tenkh { get; set; }
        public string diachi { get; set; }
        public string sdt { get; set; }
        public string ghichu { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<chitiethoadonban> chitiethoadonbans { get; set; }
        public virtual khachhang khachhang { get; set; }
        public virtual nhanvien nhanvien { get; set; }
    }
}
