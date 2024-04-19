/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { Text, Img, Button, Input } from "../../components";
import { ThreeDCardDemo } from "../../components/ui/3dcard";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
export default function HomepageVOnePage() {
  const products = useSelector((state) => state.products.products);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
    <>
      <Helmet>
        <title>Stealth</title>
        <meta name="description" content="An Online Shoe Store" />
      </Helmet>
      <div className={`flex flex-col max-w-[102rem] mx-auto px-5 bg-background text-white "relative`}>      
         <section className="flex flex-col lg:flex-row">
            <div className="flex flex-col flex-1 gap-y-3 mt-12 items-center lg:items-start lg:ml-2">
              <Text as="h1" className="text-[3.5rem] font-medium max-w-[30rem] text-center lg:text-start">
                The <span className="text-green-500">journey</span> begins with the <span className="text-green-500">perfect</span> pair
              </Text>
              <Text className="text-[1.4rem] text-gray-500 max-w-[35rem] text-center lg:text-start" as={'h2'}>Discover unparalled style and unmatched comfort with Stealth. Our meticulously crafted shoes redefine fashion, ensuring every step you take is a statement. Eleveate your footwear game.</Text>
              <Link to="/productlist"><Button className="bg-background border-2 border-green-500 text-white px-12 py-4 rounded-full mt-8 text-xl font-medium hover:bg-green-500">Shop Now<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-down rotate-[-90deg] ml-1"><path d="m7 6 5 5 5-5"/><path d="m7 13 5 5 5-5"/></svg></Button> </Link>
              </div>
            <div className="flex flex-col flex-[1] items-center justify-center gap-y-10 pt-24 sm:pt-0">
                <Img className="mr-4" src="../.././public/images/Homepage/plz.png" alt="testImg" />                
            </div>
          </section>

          <section className="mt-24">
            <Text className="text-3xl text-center font-medium" as={'h1'}>
              Top Brands
            </Text>
            <Text className="text-xl text-center font-normal pt-2" as={'p'} >
              Find your Dream Shoe Pair From 5000+ Collections
            </Text>
            <div className="grid grid-cols-3 place-items-center py-2 bg-green-500 rounded-sm lg:flex lg:justify-center lg:gap-12 mt-6">
              <Img className="w-[100px] h-[60px]" src="../.././public/images/brands/nike.png" alt="testImg" />
              <Img className="w-[120px] h-[80px]" src="../.././public/images/brands/adidas.png" alt="testImg" />
              <Img className="w-[100px] h-[60px]" src="../.././public/images/brands/under armour.png" alt="testImg" />
              <Img className="w-[140px] h-[140px]" src="../.././public/images/brands/north face.png" alt="testImg" />
              <Img className="w-[120px] h-[110px]" src="../.././public/images/brands/lv.png" alt="testImg" />
              <Img className="w-[120px] h-[110px]" src="../.././public/images/brands/converse.png" alt="testImg" />
            </div>
          </section>

          <section className="mt-24 border-t-2 border-b-2 border-green-500">
            <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-center py-2">
            <div>
              <Img className="w-[40rem] h-[39rem] lg:h-[34rem] object-cover" src="../.././public/images/Homepage/poster-22.jpg" alt="testImg" />
            </div>
            <div className="flex flex-col gap-y-12 justify-center">
                <div className="flex flex-col gap-y-8 items-center">
                  <Text className="text-5xl lg:text-6xl max-w-[50rem] font-bold text-center pt-8">Stealth: Stride in Style Comfortably</Text>
                  <Text className="text-2xl lg:text-3xl max-w-[45rem] font-medium md:ml-14 text-gray-400 text-center">At Stealth, we're more than just a shoe reselling brand;we're curators of style and quality. With a passion for footwear, we handpick each pair, ensuring every step you take is as stride in fashion forward confidence.</Text>
                </div>
            </div>
              
            </div>
          </section>
          {
          isMobile !== true &&
          <section className="mt-4">
            <div className="flex justify-around pt-4">
              <span className="mx-4 text-5xl font-semibold text-green-500">STEALTH</span>
              <span className="mx-4 text-5xl font-semibold text-green-500">STEALTH</span>
              <span className="mx-4 text-5xl font-semibold text-green-500">STEALTH</span>
              <span className="mx-4 text-5xl font-semibold text-green-500">STEALTH</span>
            </div>
            </section>
          }

            <section className="mt-24 py-12">
              <Text className="text-center text-2xl font-medium" >At Stealth Shoes</Text>
              <Text className="text-center mt-3 font-bold text-6xl lg:pb-24" >We Offer</Text>
              <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-12 mt-16">
              <div className="flex flex-col gap-12 max-w-[40rem]">
                <div>
                  <Text className="text-2xl font-bold text-center lg:text-start"><span className="-ml-5">1. </span>Top Notch Quality</Text>
                  <Text className="font-medium text-gray-400 text-center lg:text-start">At Stealth we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability and style</Text>
                </div>
                <div>
                <Text className="text-2xl font-bold text-center lg:text-start"><span className="-ml-5">2. </span>Comfort and Support</Text>
                  <Text className="font-medium text-gray-400 text-center lg:text-start">Stealth shoes redefine comfort with precision. Our designs seamlessly bblend style and support, ensuring every step is a delight. Elevate your comfort with Stealth.</Text>
                </div>
                <div>
                <Text className="text-2xl font-bold text-center lg:text-start"><span className="-ml-5">3. </span>Style and Versatility</Text>
                  <Text className="font-medium text-gray-400 text-center lg:text-start">With trendy designs, vibrant colors and timeless patterns, Stealth offers a diverse range that complements every taste. Elevate your style with the perfect pairs.</Text>
                </div>
              </div>
              <div className="-mt-6">
                {products ? <ThreeDCardDemo height="22rem" width="22rem" product={products[2]} details={false} lazyLoad={true}/> : "Loading"}
              </div>
              </div>
            </section>

            <section className="lg:mt-24">
              <Text as={'h1'} className="text-center text-6xl font-bold leading-snug" >Featured Products</Text>
              <div className="flex flex-col lg:flex-row justify-around gap-8 mt-24">
                {products ? products.slice(13, 16).map((product) => (
                   <ThreeDCardDemo key={product.id} height={"h-[26rem]"} width={"w-[20rem]"} product={product} details={false} lazyLoad={true}/>
                )): "Loading"}
              </div>
            </section>


            <section className="mt-24">
                <div className="container px-6 py-6 mx-auto">
                  <div className="grid items-center gap-4 xl:grid-cols-5">
                    <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                      <h2 className="text-4xl font-bold">What our customers think about us</h2>
                      <p className="text-gray-400 font-medium">
              "Read what our valued customers have to say about their experiences with us. From glowing testimonials to heartfelt feedback, find out why they choose us time and time again."</p>
                    </div>
                    <div className="p-6 xl:col-span-3">
                      <div className="grid gap-8 md:grid-cols-2">
                        <div className="grid content-center gap-8">
                          <div className="p-6 rounded shadow-md bg-black text-white">
                            <p>The sneakers I bought from Stealth were top-notch! Not only were they in pristine condition, but they also arrived right on time. I'm impressed with the quality and service. Will definitely be shopping here again!</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                              <div>
                                <p className="text-lg font-semibold text-green-500">Leroy Jenkins</p>
                                <p className="text-sm">CTO of Company Co.</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 rounded shadow-md bg-black text-white">
                            <p>"Stealth exceeded my expectations! The variety of shoes available was impressive, and I found exactly what I was looking for. The ordering process was seamless, and my package arrived securely packaged. Highly recommend!</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                              <div>
                                <p className="text-lg font-semibold text-green-500">Jack Stone</p>
                                <p className="text-sm">Sales Manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid content-center gap-8">
                          <div className="p-6 rounded shadow-md bg-black text-white">
                            <p>I've been a loyal customer of Stealth for years, and they never disappoint. The selection is always on point, and the team goes above and beyond to ensure customer satisfaction. I've never had a bad experience shopping here.</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                              <div>
                                <p className="text-lg font-semibold text-green-500">Liam Johnson </p>
                                <p className="text-sm ">Financial Analyst</p>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 rounded shadow-md bg-black text-white">
                            <p>Stealth isn't just a shoe store; it's an experience. From the moment I placed my order to the day my shoes arrived, I felt like a valued customer. The personalized service and attention to detail set Stealth apart from the rest. I'll definitely be back for more!</p>
                            <div className="flex items-center mt-4 space-x-4">
                              <img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full " />
                              <div>
                                <p className="text-lg font-semibold text-green-500">Emma Carter</p>
                                <p className="text-sm">Graphic Designer</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="mt-24 px-6 pt-18 pb-20">
              <div className="flex flex-col gap-12 items-center lg:flex-row lg:justify-between">
              <div className="flex flex-col gap-2 items-center lg:ml-6">
              <Text className="text-2xl font-semibold">Contact Us</Text>
              <Text className="text-4xl font-bold">Don't hesitate to Talk with Us</Text>
              <Text className="text-3xl font-normal">Relax, we are ready to support 24/7</Text>
              </div>                
                <form onSubmit={() => {
                  alert("Thank you for contacting us. We will get back to you soon!")
                }} className="text-black rounded-lg border bg-card text-card-foreground shadow-sm py-1 px-6 mr-10 max-w-[35rem] lg:w-full"><div className="flex flex-col p-6 space-y-1"><h3 className="text-white font-semibold tracking-tight text-2xl">Drop Us A Line</h3></div><div className="p-6 pt-0 grid gap-4"><div className="grid gap-2"><label className="text-sm text-white font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label><Input type="email" className="py-2 pl-2 text-white flex placeholder:text-white h-10 w-full rounded-md border-green-500 border-input bg-background px-32 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="m@example.com" id="email" required/></div><div className="grid gap-2"><label className="text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="Message">Message</label><textarea required type="text" className="pl-2 border-green-500 flex placeholder:text-white h-10 w-full rounded-md text-white border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter your Message" id="Message"></textarea></div></div><div className="flex flex-col items-center gap-y-6 p-6 pt-0"><button className=" bg-green-400 whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full flex items-center justify-center text-center cursor-pointer" type="submit">Submit</button></div></form>
              </div>
            </section>

      </div>
      <Footer/>
    </>
  );
}
