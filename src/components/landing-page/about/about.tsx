import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-sm text-center">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Be part of a community</h2>
                        <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Join or Start a community below !</p>
                        <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Free trial for 30 days</a>
                    </div>
                </div>
                <div class="grid max-w-screen-lg gap-8 row-gap-5 md:row-gap-8 sm:mx-auto lg:grid-cols-2">
                    <div class="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div class="relative">
                            <img class="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96" src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                            <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
                        </div>
                        <div class="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">
                                Join a Club
                            </h5>
                            <p class="mb-5 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde.
                            </p>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-800 focus:shadow-outline focus:outline-none"
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                    <div class="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                        <div class="relative">
                            <img class="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96" src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                            <div class="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
                        </div>
                        <div class="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                            <h5 class="mb-2 text-xl font-bold leading-none sm:text-2xl">Register a Club</h5>
                            <p class="mb-5 text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut perspiciatis unde.
                            </p>
                            <button
                                type="submit"
                                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-500 hover:bg-green-800 focus:shadow-outline focus:outline-none"
                            >
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});