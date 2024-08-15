import React from 'react'

export default function Faqs() {
  return (
    <>
    {/* <!-- FAQs Start --> */}
        <div className="container-fluid faq-section bg-light">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="h-100">
                            <div className="mb-5">
                                <h4 className="text-primary h1">Some Important FAQ's</h4>
                                <h1 className="display-4 mb-0">Common Frequently Asked Questions</h1>
                            </div>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q: What Is Your Refund Policy?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show active" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body rounded">
                                            A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ab nostrum excepturi repellendus inventore dolor eos expedita? Libero laboriosam natus quia culpa ad ipsa reiciendis odio rerum tempore possimus! Nesciunt quas, voluptas aliquam ut expedita, commodi modi exercitationem repellendus qui rerum, esse facilis aperiam? Ipsam magnam iure repellat beatae fugit.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q: Is There all Products Are Genuine?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum, ipsa doloribus veritatis cupiditate illum inventore rem repudiandae corrupti! Perferendis ex magni sed facilis corporis odit optio, distinctio praesentium ipsa asperiores ratione modi placeat! Natus laudantium assumenda dolore, minus fugit possimus iure reiciendis nobis consequuntur ea et doloribus accusamus repudiandae!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Q: Why should I buy products from ecom?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates blanditiis quaerat cumque nesciunt aliquam natus porro tempora. Corporis optio nobis enim atque esse provident incidunt, voluptas vel possimus perferendis quidem nulla. Consectetur, ab commodi earum accusantium esse sit atque nesciunt natus placeat, eos modi, sapiente minima at architecto rem voluptates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
                        <img src="img/carousel-2.png" className="img-fluid w-100" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- FAQs End --> */}
    </>
  )
}
