import formImg from "/images/form-img.png";
import formBg from "/images/form-bg.png";
import { FormProvider } from "../sections/form2/context/FormContext.jsx";
import Form from "../sections/form2/components/form.jsx";

export default function RegisterForm() {
  return (
    <section
      id="register"
      className="h-[100vh] w-[100%] box-border p-5 pt-5 md:pb-5  relative"
    >
      <span className="capitalize text-[#FF692D]">&#47;&#47; game on</span>
      <div className="flex h-full w-full gap-3 lg:gap-0">
        <div className="w-full hidden lg:block h-full">
          <h2 className="uppercase text-5xl font-bold text-white">register</h2>
          <img
            src={formImg}
            className="h-[80%] 2xl:h-[90%] mt-[12vh] object-cover absolute  left-[-100px]"
          />
        </div>
      </div>
      <img
        src={formBg}
        alt=""
        className="absolute w-[80%] h-[85%] lg:h-[95%] lg:w-[50%] z-0 top-[10vh] left-[15vw] lg:left-[39vw] "
      />
      <div className="absolute lg:w-[40vw] w-[80%] top-[10vh] z-2 h-full  left-[18vw] lg:left-[40vw] ">
        <FormProvider>
          <Form />
        </FormProvider>
      </div>
    </section>
  );
}
