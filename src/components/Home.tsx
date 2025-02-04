"use client";
import { useRouter } from "next/navigation";

const Home = () => {
 const router = useRouter();
 const token = localStorage.getItem("token");

 if (!token) {
  router.push("/auth/login");
 }

 return <div>Home</div>;
};

export default Home;
