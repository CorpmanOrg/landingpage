// "use client";

// import { useState } from "react";
// import { useQuery, useMutation } from "@tanstack/react-query";
// import { fetchSingleCooperativeFn, joinCoopFn } from "@/utils/ApiFactory/join";
// import { LoadingState } from "@/components/LoadingState";
// import { ErrorState } from "@/components/ErrorState";
// import { HeroSection } from "@/components/HeroSection";
// import { AboutSection } from "@/components/AboutSection";
// import { InvestmentPackages } from "@/components/InvestmentPackages";
// import { JoinForm } from "@/components/JoinForm";
// import Toastbar from "@/components/Toastbar";

// interface Props {
//   params: Promise<{ cooperatives: string }>;
// }

// interface People {
//   id: string;
//   alt: string;
//   icon: string | StaticImageData;
// }

// const people: People[] = [
//   {
//     id: "1",
//     alt: "logo-1",
//     icon: Logo1,
//   },
//   {
//     id: "2",
//     alt: "logo-2",
//     icon: Logo2,
//   },
//   {
//     id: "3",
//     alt: "logo-3",
//     icon: Logo3,
//   },
// ];

// const packages = [
//   {
//     title: "BASIC",
//     price: "$25",
//     features: ["Minimum investment: $100", "Low risk portfolio", "Weekly report access", "Customer support"],
//     colorFrom: "from-gray-400",
//     colorTo: "to-gray-600",
//     buttonColor: "bg-gray-600",
//   },
//   {
//     title: "STANDARD",
//     price: "$35",
//     features: ["Minimum investment: $1,000", "Moderate risk portfolio", "Bi-weekly report access", "Priority support"],
//     colorFrom: "from-green-500",
//     colorTo: "to-green-700",
//     buttonColor: "bg-green-600",
//   },
//   {
//     title: "PREMIUM",
//     price: "$35",
//     features: ["Minimum investment: $10,000", "Custom portfolio", "Daily report access", "Dedicated support manager"],
//     colorFrom: "from-gray-700",
//     colorTo: "to-gray-900",
//     buttonColor: "bg-gray-800",
//   },
// ];

// const sampleUsers = [
//   {
//     id: "1",
//     name: "Aiony Haust",
//     imageUrl: "/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg",
//   },
//   {
//     id: "2",
//     name: "Diego Hernandez",
//     imageUrl: "/img/diego-hernandez-MSepzbKFz10-unsplash.jpg",
//   },
//   {
//     id: "3",
//     name: "John Smith",
//     imageUrl: "/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg",
//   },
//   {
//     id: "4",
//     name: "Jane Doe",
//     imageUrl: "/img/diego-hernandez-MSepzbKFz10-unsplash.jpg",
//   },
//   {
//     id: "5",
//     name: "Bob Wilson",
//     imageUrl: "/img/aiony-haust-3TLl_97HNJo-unsplash (1).jpg",
//   },
//   {
//     id: "6",
//     name: "Alice Brown",
//     imageUrl: "/img/diego-hernandez-MSepzbKFz10-unsplash.jpg",
//   },
// ];

// type ToastSeverity = "success" | "error" | "warning" | "info";

// interface ToastState {
//   open: boolean;
//   severity: ToastSeverity;
//   message: string;
// }

// const AllCoperatives = ({ params }: Props) => {
//   const { cooperatives } = use(params);
//   const initialValues =
//     cooperatives !== ""
//       ? {
//           ...joinInitialValues,
//           organizationId: cooperatives,
//         }
//       : { ...joinInitialValues, organizationId: "" };

//   const [toast, setToast] = useState<ToastState>({
//     open: false,
//     severity: "success",
//     message: "",
//   });

//   const showToast = (severity: ToastSeverity, message: string) => {
//     setToast({
//       open: true,
//       severity,
//       message,
//     });
//   };

//   const handleCloseToast = () => {
//     setToast((prevS) => ({
//       ...prevS,
//       open: false,
//     }));
//   };

//   const {
//     data: cooperativeDetailData,
//     isLoading: isLoadingCooperativeDetail,
//     isError: isErrorCooperativeDetail,
//     error: cooperativeDetailError,
//     refetch: refetchCooperativeDetail,
//   } = useQuery({
//     queryKey: ["fetch-single-cooperative", cooperatives],
//     queryFn: () => fetchSingleCooperativeFn(cooperatives),
//     enabled: cooperatives !== "",
//   });

//   const { mutate: joinCoop, isPending } = useMutation({
//     mutationFn: joinCoopFn,
//     onSuccess: (data) => {
//       console.log("From Success: ", data);
//       showToast("success", "Succesfully sent your request");
//     },
//     onError: (error: unknown) => {
//       // Safely extract the message from the error object
//       let errMsg = "Something went wrong. Please try again.";
//       if (error instanceof Error) {
//         errMsg = error.message;
//       }

//       showToast("error", errMsg);
//     },
//   });

//   const handleSubmit = (values: typeof joinInitialValues) => {
//     const payload = {
//       ...values,
//       annualIncome: Number(values.annualIncome),
//       monthlyContribution: Number(values.monthlyContribution),
//     };

//     console.log("Payload Step: ", payload);
//     joinCoop(payload);
//   };

//   console.log("Single Cooperative: ", {
//     cooperativeDetailData,
//     isLoadingCooperativeDetail,
//     isErrorCooperativeDetail,
//     cooperativeDetailError,
//   });

//   return (
//     <main className="min-h-screen bg-[#F3FFF460] relative">
//       <div className=""></div>
//       <Toastbar open={toast.open} message={toast.message} severity={toast.severity} onClose={handleCloseToast} />
//       <Navbar />
//       {isLoadingCooperativeDetail ? (
//         <div className="min-h-screen bg-[#F3FFF460] relative overflow-hidden">
//           {/* Animated Background Particles */}
//           <div className="absolute inset-0">
//             <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
//             <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-40 left-20 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
//             <div className="absolute bottom-20 right-10 w-2 h-2 bg-green-200 rounded-full animate-ping"></div>
//             <div className="absolute top-60 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
//           </div>

//           {/* Loading Hero Section */}
//           <section className="mx-auto w-4/5 relative z-10">
//             <div className="mt-8 relative h-[250px] sm:h-[225px] md:h-[250px] rounded-t-[2rem] overflow-hidden bg-gradient-to-br from-green-100 to-green-200 animate-pulse">
//               <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/30 to-green-700/20 flex flex-col justify-center items-center px-4 py-6">
//                 {/* Shimmer Effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>

//                 <div className="text-center space-y-4">
//                   {/* Loading Title */}
//                   <div className="flex justify-center space-x-2 mb-4">
//                     <div className="w-8 h-8 bg-white/30 rounded-full animate-bounce"></div>
//                     <div
//                       className="w-8 h-8 bg-white/30 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.1s" }}
//                     ></div>
//                     <div
//                       className="w-8 h-8 bg-white/30 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.2s" }}
//                     ></div>
//                   </div>

//                   <div className="bg-white/30 rounded-xl h-12 w-80 mx-auto animate-pulse"></div>
//                   <div className="bg-white/20 rounded-lg h-6 w-60 mx-auto animate-pulse"></div>
//                 </div>
//               </div>
//             </div>

//             {/* Loading Logo */}
//             <div className="relative w-4/5 mx-auto lg:mb-8">
//               <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 md:left-10 md:transform-none md:-top-18 lg:w-32 lg:h-32 lg:-top-16 rounded-full bg-gradient-to-br from-green-200 to-green-300 animate-pulse shadow-xl border-4 border-white z-10">
//                 <div className="absolute inset-2 rounded-full bg-gradient-to-r from-green-300 to-green-400 animate-spin-slow"></div>
//               </div>
//             </div>
//           </section>

//           {/* Loading Content Sections */}
//           <section className="mx-auto w-4/5 relative z-10">
//             <div className="py-12 mt-[50px]">
//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//                 {/* Loading About Section */}
//                 <div className="lg:col-span-7">
//                   <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/50 to-transparent animate-shimmer"></div>

//                     <div className="bg-green-100 rounded-lg h-8 w-64 mb-4 animate-pulse"></div>
//                     <div className="space-y-3 mb-6">
//                       <div className="bg-gray-200 rounded h-4 w-full animate-pulse"></div>
//                       <div className="bg-gray-200 rounded h-4 w-5/6 animate-pulse"></div>
//                       <div className="bg-gray-200 rounded h-4 w-4/5 animate-pulse"></div>
//                       <div className="bg-gray-200 rounded h-4 w-3/4 animate-pulse"></div>
//                     </div>

//                     <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
//                       {[1, 2, 3].map((i) => (
//                         <div key={i} className="text-center">
//                           <div className="bg-green-100 rounded-lg h-8 w-16 mx-auto mb-2 animate-pulse"></div>
//                           <div className="bg-gray-200 rounded h-3 w-20 mx-auto animate-pulse"></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Loading Sidebar */}
//                 <div className="lg:col-span-5 space-y-6">
//                   {/* Loading Members Card */}
//                   <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>

//                     <div className="text-center">
//                       <div className="bg-green-200 rounded-lg h-6 w-48 mx-auto mb-4 animate-pulse"></div>

//                       <div className="flex justify-center items-center mb-4">
//                         <div className="flex -space-x-2">
//                           {[1, 2, 3, 4].map((i) => (
//                             <div
//                               key={i}
//                               className="w-10 h-10 bg-green-200 rounded-full animate-pulse border-2 border-white"
//                               style={{ animationDelay: `${i * 0.1}s` }}
//                             ></div>
//                           ))}
//                         </div>
//                       </div>

//                       <div className="bg-green-300 rounded-lg h-10 w-16 mx-auto mb-2 animate-pulse"></div>
//                       <div className="bg-green-200 rounded h-4 w-24 mx-auto mb-1 animate-pulse"></div>
//                       <div className="bg-gray-300 rounded h-3 w-40 mx-auto animate-pulse"></div>
//                     </div>
//                   </div>

//                   {/* Loading CTA Card */}
//                   <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/30 to-transparent animate-shimmer"></div>

//                     <div className="text-center space-y-4">
//                       <div className="bg-gray-200 rounded-lg h-6 w-48 mx-auto animate-pulse"></div>
//                       <div className="bg-gray-200 rounded h-4 w-56 mx-auto animate-pulse"></div>
//                       <div className="bg-gradient-to-r from-green-200 to-green-300 rounded-lg h-12 w-full animate-pulse"></div>
//                       <div className="flex justify-center gap-4">
//                         <div className="bg-gray-200 rounded h-3 w-20 animate-pulse"></div>
//                         <div className="bg-gray-200 rounded h-3 w-24 animate-pulse"></div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Loading Investment Packages */}
//           <section className="mx-auto w-4/5 relative z-10">
//             <div className="container mx-auto mt-8 py-8 md:py-16">
//               <div className="mb-16">
//                 <div className="text-center mb-12">
//                   <div className="bg-gray-200 rounded-xl h-12 w-96 mx-auto mb-4 animate-pulse"></div>
//                   <div className="bg-gray-200 rounded-lg h-6 w-2/3 mx-auto animate-pulse"></div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                   {[1, 2, 3].map((i) => (
//                     <div
//                       key={i}
//                       className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden ${
//                         i === 2 ? "scale-105 ring-2 ring-green-200" : ""
//                       }`}
//                     >
//                       {/* Loading Package Header */}
//                       <div className="bg-gradient-to-r from-gray-200 to-gray-300 p-8 text-center relative animate-pulse">
//                         <div className="bg-white/30 rounded-lg h-8 w-24 mx-auto mb-2"></div>
//                         <div className="bg-white/30 rounded-lg h-12 w-20 mx-auto"></div>
//                       </div>

//                       {/* Loading Features */}
//                       <div className="p-8">
//                         <div className="space-y-4 mb-8">
//                           {[1, 2, 3, 4].map((j) => (
//                             <div key={j} className="flex items-start gap-3">
//                               <div className="w-5 h-5 bg-green-100 rounded-full animate-pulse mt-0.5"></div>
//                               <div className="bg-gray-200 rounded h-4 flex-1 animate-pulse"></div>
//                             </div>
//                           ))}
//                         </div>

//                         <div className="bg-gray-200 rounded-xl h-12 w-full animate-pulse"></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Loading Form */}
//               <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/20 to-transparent animate-shimmer"></div>

//                 <div className="text-center mb-8">
//                   <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 animate-pulse"></div>
//                   <div className="bg-gray-200 rounded-xl h-10 w-72 mx-auto mb-2 animate-pulse"></div>
//                   <div className="bg-gray-200 rounded-lg h-5 w-80 mx-auto animate-pulse"></div>
//                 </div>

//                 {/* Loading Form Sections */}
//                 {[1, 2, 3, 4].map((section) => (
//                   <div key={section} className="bg-gray-50 rounded-xl p-6 mb-8">
//                     <div className="flex items-center gap-2 mb-6">
//                       <div className="w-6 h-6 bg-green-200 rounded-full animate-pulse"></div>
//                       <div className="bg-gray-200 rounded-lg h-6 w-48 animate-pulse"></div>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                       {[1, 2, 3].map((field) => (
//                         <div key={field} className="space-y-2">
//                           <div className="bg-gray-200 rounded h-4 w-24 animate-pulse"></div>
//                           <div className="bg-white rounded-xl h-12 w-full animate-pulse border border-gray-200"></div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}

//                 <div className="bg-green-200 rounded-xl h-14 w-full animate-pulse"></div>
//               </div>
//             </div>
//           </section>

//           {/* Loading Status Text */}
//           <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-green-200">
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <div className="w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
//                 <div className="absolute inset-0 w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
//               </div>
//               <span className="text-green-700 font-medium">Loading cooperative details...</span>
//             </div>
//           </div>
//         </div>
//       ) : isErrorCooperativeDetail ? (
//         <div className="min-h-screen bg-[#F3FFF460] relative flex items-center justify-center">
//           <div className="text-center p-8 bg-white rounded-2xl shadow-2xl border border-red-100 max-w-md mx-auto">
//             <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
//             <p className="text-gray-600 mb-6">
//               We couldn't load the cooperative details at this time. Please try again.
//             </p>
//             <button
//               onClick={() => refetchCooperativeDetail()}
//               className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <section className="mx-auto w-4/5">
//             {/* Background */}
//             <div
//               className="mt-8 relative h-[250px] sm:h-[225px] md:h-[250px] bg-cover bg-center rounded-t-[2rem] overflow-hidden"
//               style={{ backgroundImage: `url('/img/auth-bkdImg.png')` }}
//             >
//               <div className="absolute inset-0 bg-green-700 bg-opacity-75 flex flex-col justify-center items-center text-white text-center px-4 py-6">
//                 <div className="text-center md:text-left">
//                   <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">{`${
//                     cooperativeDetailData?.organization?.name || "Acme Investment Cooperative"
//                   }`}</h1>
//                   <p className="text-sm sm:text-base md:text-lg text-white mt-2">
//                     {`${cooperativeDetailData?.organization?.address || "Building Financial Futures Together"}`}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Overlapping Logo */}
//             <div className="relative w-4/5 mx-auto lg:mb-8">
//               <div
//                 className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-16 h-16
//              md:w-20 md:h-20 md:left-10 md:transform-none md:-top-18
//              lg:w-32 lg:h-32 lg:-top-16
//              rounded-full overflow-hidden border-4 border-white bg-white z-10 shadow-xl"
//               >
//                 <Image
//                   className="object-cover"
//                   src={CorpLogo}
//                   // src={cooperativeDetailData?.organization?.logo || CorpLogo}
//                   alt="Company Logo"
//                   fill
//                 />
//               </div>
//             </div>
//           </section>

//           {/* Enhanced Description Section */}
//           <section className="mx-auto w-4/5">
//             <div className="py-12 mt-[50px]">
//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//                 {/* About Section */}
//                 <div className="lg:col-span-7">
//                   <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
//                     <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our Cooperative</h2>
//                     <p className="text-gray-700 leading-relaxed text-base mb-6">
//                       {cooperativeDetailData?.organization?.description ||
//                         "We are a leading investment cooperative committed to empowering our members through strategic financial planning and collective investment opportunities. Our experienced team provides personalized guidance to help you achieve your financial goals while building lasting wealth for your future."}
//                     </p>

//                     {/* Key Stats */}
//                     <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-green-600">₦50M+</div>
//                         <div className="text-sm text-gray-600">Total Assets</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-green-600">15%</div>
//                         <div className="text-sm text-gray-600">Avg. Returns</div>
//                       </div>
//                       <div className="text-center">
//                         <div className="text-2xl font-bold text-green-600">5+</div>
//                         <div className="text-sm text-gray-600">Years Active</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Members & CTA Section */}
//                 <div className="lg:col-span-5 space-y-6">
//                   {/* Enhanced Members Card */}
//                   <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
//                     <div className="text-center">
//                       <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Growing Community</h3>

//                       {/* Avatar Stack with improved spacing */}
//                       <div className="flex justify-center items-center mb-4">
//                         <div className="flex -space-x-2">
//                           <AvatarGroup users={sampleUsers} maxVisible={4} size="md" />
//                         </div>
//                       </div>

//                       <div className="space-y-2">
//                         <p className="text-3xl font-bold text-green-700">{sampleUsers.length}+</p>
//                         <p className="text-gray-700 font-medium">Active Members</p>
//                         <p className="text-sm text-gray-600">Join a community of successful investors</p>
//                       </div>

//                       {/* Trust Indicators */}
//                       <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
//                         <div className="flex items-center justify-center gap-1 text-green-700">
//                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                             <path
//                               fillRule="evenodd"
//                               d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           Verified Members
//                         </div>
//                         <div className="flex items-center justify-center gap-1 text-green-700">
//                           <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
//                             <path
//                               fillRule="evenodd"
//                               d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           Secure Platform
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Enhanced CTA Button */}
//                   <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
//                     <div className="text-center space-y-4">
//                       <h3 className="text-xl font-bold text-gray-900">Ready to Get Started?</h3>
//                       <p className="text-gray-600 text-sm">Take the first step towards financial independence</p>
//                       <a href="#join-form" className="block">
//                         <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
//                           Join Our Cooperative
//                         </button>
//                       </a>
//                       <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
//                         <span>✓ No setup fees</span>
//                         <span>✓ Expert guidance</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Form Section */}
//           <section className="mx-auto w-4/5">
//             <div className="container mx-auto mt-8 py-8 md:py-16">
//               {/* Investment Packages */}
//               <div className="mb-16">
//                 <div className="text-center mb-12">
//                   <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Investment Plan</h2>
//                   <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                     Select the perfect investment package that aligns with your financial goals and risk tolerance
//                   </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//                   {packages.map((pkg, index) => (
//                     <div
//                       key={index}
//                       className={`relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
//                         index === 1 ? "ring-2 ring-green-500 scale-105" : ""
//                       }`}
//                     >
//                       {/* Popular Badge */}
//                       {index === 1 && (
//                         <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
//                           <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
//                             Most Popular
//                           </span>
//                         </div>
//                       )}

//                       {/* Header with gradient */}
//                       <div
//                         className={`bg-gradient-to-r ${pkg.colorFrom} ${pkg.colorTo} p-8 text-white text-center relative`}
//                       >
//                         <div className="relative z-10">
//                           <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
//                           <div className="flex items-baseline justify-center gap-1">
//                             <span className="text-4xl font-extrabold">{pkg.price}</span>
//                             <span className="text-lg opacity-80">/month</span>
//                           </div>
//                         </div>
//                         {/* Decorative elements */}
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
//                         <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
//                       </div>

//                       {/* Features */}
//                       <div className="p-8">
//                         <ul className="space-y-4 mb-8">
//                           {pkg.features.map((feature, i) => (
//                             <li key={i} className="flex items-start gap-3">
//                               <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
//                                 <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
//                                   <path
//                                     fillRule="evenodd"
//                                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                     clipRule="evenodd"
//                                   />
//                                 </svg>
//                               </div>
//                               <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>

//                         {/* CTA Button */}
//                         <button
//                           className={`w-full ${pkg.buttonColor} hover:opacity-90 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
//                         >
//                           Get Started
//                         </button>
//                       </div>

//                       {/* Bottom accent */}
//                       <div className={`h-1 bg-gradient-to-r ${pkg.colorFrom} ${pkg.colorTo}`}></div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Additional Info */}
//                 <div className="text-center mt-12">
//                   <p className="text-gray-600 mb-4">All plans include our standard protections and 24/7 support</p>
//                   <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
//                     <span className="flex items-center gap-2">
//                       <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       Secure & Insured
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       No Hidden Fees
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path
//                           fillRule="evenodd"
//                           d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
//                           clipRule="evenodd"
//                         />
//                       </svg>
//                       Cancel Anytime
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Join Form */}
//               <div id="join-form" className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl border border-gray-100">
//                 {/* Form Header */}
//                 <div className="text-center mb-8">
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
//                     <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                   </div>
//                   <h3 className="text-3xl font-bold text-gray-900 mb-2">Join Our Cooperative</h3>
//                   <p className="text-gray-600 max-w-md mx-auto">
//                     Fill out the form below to start your journey towards financial growth and stability
//                   </p>
//                 </div>

//                 <Formik initialValues={initialValues} validationSchema={joinSchema} onSubmit={handleSubmit}>
//                   {(formik) => {
//                     return (
//                       <Form className="space-y-8" onSubmit={formik.handleSubmit}>
//                         {/* Personal Information Section */}
//                         <div className="bg-gray-50 rounded-xl p-6">
//                           <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
//                             <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                               <span className="text-white text-sm font-bold">1</span>
//                             </div>
//                             Personal Information
//                           </h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             <Input
//                               name="surname"
//                               type="text"
//                               label="Surname"
//                               placeholder="Enter your surname"
//                               value={formik.values.surname}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.surname}
//                               error={formik.errors.surname}
//                             />
//                             <Input
//                               name="firstName"
//                               type="text"
//                               label="First Name"
//                               placeholder="Enter your first name"
//                               value={formik.values.firstName}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.firstName}
//                               error={formik.errors.firstName}
//                             />
//                             <Input
//                               name="middleName"
//                               type="text"
//                               label="Middle Name"
//                               placeholder="Enter your middle name"
//                               value={formik.values.middleName}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.middleName}
//                               error={formik.errors.middleName}
//                             />
//                             <Input
//                               name="email"
//                               type="email"
//                               label="Email Address"
//                               placeholder="Enter your email"
//                               value={formik.values.email}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.email}
//                               error={formik.errors.email}
//                             />
//                             <Input
//                               name="password"
//                               type="password"
//                               label="Password"
//                               placeholder="Create a password"
//                               value={formik.values.password}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.password}
//                               error={formik.errors.password}
//                             />
//                             <Input
//                               name="mobileNumber"
//                               type="tel"
//                               label="Phone Number"
//                               placeholder="Enter your phone number"
//                               value={formik.values.mobileNumber}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.mobileNumber}
//                               error={formik.errors.mobileNumber}
//                             />
//                             <Input
//                               name="dateOfBirth"
//                               type="date"
//                               label="Date of Birth"
//                               value={formik.values.dateOfBirth}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.dateOfBirth}
//                               error={formik.errors.dateOfBirth}
//                             />
//                             <Input
//                               name="maritalStatus"
//                               type="text"
//                               label="Marital Status"
//                               placeholder="Single, Married, etc."
//                               value={formik.values.maritalStatus}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.maritalStatus}
//                               error={formik.errors.maritalStatus}
//                             />
//                           </div>
//                         </div>

//                         {/* Address Information Section */}
//                         <div className="bg-gray-50 rounded-xl p-6">
//                           <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
//                             <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                               <span className="text-white text-sm font-bold">2</span>
//                             </div>
//                             Address Information
//                           </h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             <Input
//                               name="address"
//                               type="text"
//                               label="Residential Address"
//                               placeholder="Enter your home address"
//                               value={formik.values.address}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.address}
//                               error={formik.errors.address}
//                             />
//                             <Input
//                               name="stateOfOrigin"
//                               type="text"
//                               label="State of Origin"
//                               placeholder="Enter your state of origin"
//                               value={formik.values.stateOfOrigin}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.stateOfOrigin}
//                               error={formik.errors.stateOfOrigin}
//                             />
//                             <Input
//                               name="LGA"
//                               type="text"
//                               label="Local Government Area"
//                               placeholder="Enter your LGA"
//                               value={formik.values.LGA}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.LGA}
//                               error={formik.errors.LGA}
//                             />
//                           </div>
//                         </div>

//                         {/* Employment Information Section */}
//                         <div className="bg-gray-50 rounded-xl p-6">
//                           <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
//                             <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                               <span className="text-white text-sm font-bold">3</span>
//                             </div>
//                             Employment & Financial Information
//                           </h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             <Input
//                               name="employer"
//                               type="text"
//                               label="Employer"
//                               placeholder="Enter your employer"
//                               value={formik.values.employer}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.employer}
//                               error={formik.errors.employer}
//                             />
//                             <Input
//                               name="residentialAddress"
//                               type="text"
//                               label="Employer Address"
//                               placeholder="Enter employer address"
//                               value={formik.values.residentialAddress}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.residentialAddress}
//                               error={formik.errors.residentialAddress}
//                             />
//                             <Input
//                               name="annualIncome"
//                               type="number"
//                               label="Annual Income (₦)"
//                               placeholder="Enter your annual income"
//                               value={formik.values.annualIncome}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.annualIncome}
//                               error={formik.errors.annualIncome}
//                             />
//                             <Input
//                               name="monthlyContribution"
//                               type="number"
//                               label="Monthly Contribution (₦)"
//                               placeholder="Enter monthly contribution"
//                               value={formik.values.monthlyContribution}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.monthlyContribution}
//                               error={formik.errors.monthlyContribution}
//                             />
//                           </div>
//                         </div>

//                         {/* Next of Kin Information Section */}
//                         <div className="bg-gray-50 rounded-xl p-6">
//                           <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
//                             <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
//                               <span className="text-white text-sm font-bold">4</span>
//                             </div>
//                             Next of Kin Information
//                           </h4>
//                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             <Input
//                               name="nextOfKin"
//                               type="text"
//                               label="Next of Kin Name"
//                               placeholder="Enter next of kin name"
//                               value={formik.values.nextOfKin}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.nextOfKin}
//                               error={formik.errors.nextOfKin}
//                             />
//                             <Input
//                               name="nextOfKinRelationship"
//                               type="text"
//                               label="Relationship with Next of Kin"
//                               placeholder="e.g., Spouse, Parent, Sibling"
//                               value={formik.values.nextOfKinRelationship}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.nextOfKinRelationship}
//                               error={formik.errors.nextOfKinRelationship}
//                             />
//                             <Input
//                               name="nextOfKinAddress"
//                               type="text"
//                               label="Next of Kin Address"
//                               placeholder="Enter next of kin address"
//                               value={formik.values.nextOfKinAddress}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               touched={formik.touched.nextOfKinAddress}
//                               error={formik.errors.nextOfKinAddress}
//                             />
//                           </div>
//                         </div>

//                         {/* Submit Button */}
//                         <div className="pt-6">
//                           <button
//                             type="submit"
//                             disabled={isPending}
//                             className="w-full bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
//                           >
//                             {isPending ? (
//                               <>
//                                 <svg
//                                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                                   xmlns="http://www.w3.org/2000/svg"
//                                   fill="none"
//                                   viewBox="0 0 24 24"
//                                 >
//                                   <circle
//                                     className="opacity-25"
//                                     cx="12"
//                                     cy="12"
//                                     r="10"
//                                     stroke="currentColor"
//                                     strokeWidth="4"
//                                   ></circle>
//                                   <path
//                                     className="opacity-75"
//                                     fill="currentColor"
//                                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                   ></path>
//                                 </svg>
//                                 Processing...
//                               </>
//                             ) : (
//                               <>
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth={2}
//                                     d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                                   />
//                                 </svg>
//                                 Join Our Cooperative
//                               </>
//                             )}
//                           </button>
//                           <p className="text-center text-sm text-gray-500 mt-4">
//                             By joining, you agree to our terms of service and privacy policy
//                           </p>
//                         </div>
//                       </Form>
//                     );
//                   }}
//                 </Formik>
//               </div>
//             </div>
//           </section>
//         </div>
//       )}

//       <Footer />
//     </main>
//   );
// };

// export default AllCoperatives;
