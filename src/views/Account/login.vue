<template>
<div>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Komyut
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form @submit.prevent="login" class="space-y-4 md:space-y-6">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Sign in
                        </button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet?
                            <router-link to="/register" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</router-link>
                        </p>
                    </form>
                    <div class="flex items-center justify-center mt-4">
                        <p class="mr-2">Or sign in with:</p>
                        <button @click="loginWithGoogle" class="text-white bg-red-600 hover:bg-red-700 rounded-lg p-2">
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import {
    auth
} from "@/firebaseConfig";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import {
    getFirestore,
    doc,
    setDoc
} from "firebase/firestore";

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            if (!this.email || !this.password) {
                alert("Please fill in both email and password.");
                return;
            }
            try {
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log("User logged in successfully");
                this.email = "";
                this.password = "";
                this.$router.push('/');
                const db = getFirestore();
                const user = userCredential.user;
                const userDocRef = doc(db, "users", user.uid);
                await setDoc(userDocRef, {
                    email: this.email,
                    lastLogin: new Date().toISOString(),
                }, {
                    merge: true
                });
            } catch (error) {
                console.error("Error logging in: ", error.message);
                alert(error.message);
            }
        },
        async loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            try {
                const result = await signInWithPopup(auth, provider);
                const user = result.user;
                console.log("User logged in with Google:", user);
                const db = getFirestore();
                const userDocRef = doc(db, "users", user.uid);
                await setDoc(userDocRef, {
                    email: user.email,
                    lastLogin: new Date().toISOString(),
                }, {
                    merge: true
                });
            } catch (error) {
                console.error("Error logging in with Google: ", error.message);
                alert(error.message);
            }
        },
    },

};
</script>
