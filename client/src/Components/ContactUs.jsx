import React from 'react'

function ContactUs() {
  return (

    <div className='min-vh-100 px-2 px-sm-5 px-md-10 px-lg-15 bg-dark py-2 py-5'>
    <div className='h-100 w-100 d-flex flex-column flex-md-row gap-2'>
        <div className='w-100 w-md-50 text-white d-flex flex-column gap-2 px-4 py-md-8'>
            <h1 className='text-center text-md-start  fw-bold' style={{fontSize:'60px'}}>Connect with our team</h1>
            <div className='h-100 d-flex flex-column justify-between py-4 gap-3'>
                <div className='flex flex-column gap-3'>
                    <p className='fs-5 text-center text-md-start'>Our Team is happy to answer your questions about our platform.</p>
                    <ul className='flex flex-column gap-3'>
                        <li className='d-flex gap-3'> <p className='text-primary'>✓ </p>Discover how our ecommerce platform can enhance your business</li>
                        <li className='d-flex gap-3'> <p className='text-primary'>✓ </p>Get pricing information tailored to your needs</li>
                        <li className='d-flex gap-3'> <p className='text-primary'>✓ </p>Learn about other successful businesses using our ecommerce solutions</li> 
                    </ul>
                </div>
                <div className='border-top py-4'>
                    <h1 className='text-center text-md-start ' style={{fontSize:'24px'}}>Leading Brands trust us for our services</h1>
                    <div className='mt-4'>
                        <img src="zendesk.png" alt="zendesk" className='w-200' />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-100 w-md-50 p-4  py-4 py-md-5'>
            <div className='h-100 d-flex'>
                <form className='w-100 d-flex flex-column gap-3'>
                    <input type="text" placeholder='First Name' className='w-100 p-2 form-control'/>
                    <input type="text" placeholder='Last Name' className='w-100 p-2 form-control'/>
                    <input type="email" placeholder='Email' className='w-100 p-2 form-control'/>
                    <input type="text" placeholder='Company Name' className='w-100 p-2 form-control'/>
                    <input type="tel" placeholder='Phone Number' className='w-100 p-2 form-control'/>
                    <div className='form-check'>
                        <input type="checkbox" className='form-check-input'/>
                        <label className='text-white form-check-label'>I agree to receive newsletters, product updates, and exclusive offers from Vimeo</label>
                    </div>
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default ContactUs
