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
    
    public partial class chitiethoadonban
    {
        public int mahdb { get; set; }
        public int masp { get; set; }
        public Nullable<int> soluong { get; set; }
        public Nullable<double> giaban { get; set; }
        public string size { get; set; }
    
        public virtual hoadonban hoadonban { get; set; }
        public virtual sanpham sanpham { get; set; }
    }
}