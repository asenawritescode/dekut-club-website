import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";

export default component$(() => {
    const serverTime = useServerTimeLoader();

    return (
        <div class="relative mt-16 bg-green-600">
            <div class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div class="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                    <div class="md:max-w-md lg:col-span-2">
                        <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                            <img src="https://studentwelfare.dkut.ac.ke/images/templates/dd_eshopper_59/images/logo.png" class="h-8 mr-3" alt="Dekut Logo" />
                            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">DEDAN KIMATHI UNIVERSITY OF TECHNOLOGY</span>
                        </a>
                        <div class="mt-4 lg:max-w-sm">
                            <p class="text-sm text-gray-100">
                                Better life through Technology
                            </p>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                        <div>
                            <p class=" font-semibold tracking-wide text-gray-100">
                                SCHOOL LINKS
                            </p>
                            <ul class="mt-6 space-y-2">
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        DeKUT Website
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Portal
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Welfare
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Library
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        E-learning Portal
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p class=" font-semibold tracking-wide text-gray-100">
                                SCHOOL LINKS
                            </p>
                            <ul class="mt-6 space-y-2">
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        DeKUT Website
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Portal
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Welfare
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        Student Library
                                    </a>
                                </li>
                                <li>
                                    <a href="/" class="transition-colors duration-300 text-gray-100 hover:text-gray-300">
                                        E-learning Portal
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
                    <p class="text-sm text-gray-100">
                        DEKUT © {serverTime.value.date.substring(0, 4)} Built by Mradi Africa 
                    </p>
                </div>
            </div>
        </div>
    );
});
