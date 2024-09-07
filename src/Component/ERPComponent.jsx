import React from 'react';
import productImg from '../assets/product.jpeg'; // Update with your image path
import purchaseImg from '../assets/purchase.jpg'; // Update with your image path
import salesImg from '../assets/sales.jpg'; // Update with your image path
import customerImg from '../assets/customer.jpg'; // Update with your image path

function ERPComponent() {
  return (
    <section id="erp" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          ERP System Modules
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={productImg} 
              alt="Product" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Product</h3>
              <p className="text-gray-600 mb-4">
                <strong>Purchase Product:</strong> Manage the inventory by adding or updating quantities. 
                <br />
                <strong>Generate Purchase Bill and Invoice:</strong> Create records for transactions.
              </p>
            </div>
          </div>

          {/* Purchase Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={purchaseImg} 
              alt="Purchase" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Purchase</h3>
              <p className="text-gray-600 mb-4">
                <strong>Purchase Product:</strong> Manage inventory levels.
                <br />
                <strong>Generate Purchase Bill and Invoice:</strong> Record purchase transactions.
              </p>
            </div>
          </div>

          {/* Sales Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={salesImg} 
              alt="Sales" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sales</h3>
              <p className="text-gray-600 mb-4">
                <strong>Sell Product:</strong> Process sales transactions.
                <br />
                <strong>Generate Sales Invoice:</strong> Create invoices for sales.
                <br />
                <strong>Update Inventory:</strong> Adjust stock levels accordingly.
              </p>
            </div>
          </div>

          {/* Customer Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={customerImg} 
              alt="Customer" 
              className="w-full h-56 object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer</h3>
              <p className="text-gray-600 mb-4">
                <strong>Manage Customers:</strong> Add, update, or delete customer information.
                <br />
                <strong>Handle Sales for New Customers:</strong> Add new customers during sales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ERPComponent;
