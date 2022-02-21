<template>
  <div class="home max-w-7xl m-auto space-y-3">
    <h1 class="text-center text-2xl">{{ config.country }}</h1>
    <div v-if="modules.installment.active">
      <h3 class="text-lg leading-6 text-gray-900">
        <span class="font-medium text-xl">Installment</span> - for country
        <span class="font-medium text-xl">{{
          modules.installment.country
        }}</span>
      </h3>
      <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div
          v-for="item in modules.installment.data"
          :key="item.name"
          class="px-4 py-5 shadow rounded-lg overflow-hidden sm:p-6"
          :class="`bg-${item?.bgColor}-100`"
        >
          <dt class="text-sm font-medium text-gray-500 truncate">
            {{ item.name }}
          </dt>
          <dd class="mt-1 text-3xl font-semibold text-gray-900">
            {{ item.stat }}
          </dd>
        </div>
      </dl>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <template v-if="modules.alifshop.active">
      <h3 class="text-lg leading-6 text-gray-900">
        <span class="font-medium text-xl">Alifshop</span> - for country
        <span class="font-medium text-xl">
          {{ modules.alifshop.country }}
        </span>
      </h3>
      <div class="bg-gray-50">
        <div
          class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
        >
          <h2
            class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            <span class="block">{{ modules.alifshop.cta.title }}</span>
            <span class="block text-indigo-600">{{
              modules.alifshop.cta.subTitle
            }}</span>
          </h2>
          <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div class="inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="modules.deposit.active">
      <h3 class="text-lg leading-6 text-gray-900">
        <span class="font-medium text-xl">Deposit</span> - for country
        <span class="font-medium text-xl">{{ modules.deposit.country }}</span>
      </h3>
      <div class="flow-root">
        <ul role="list" class="-mb-8">
          <li
            v-for="(event, eventIdx) in modules.deposit.timeline"
            :key="event.id"
          >
            <div class="relative pb-8">
              <span
                v-if="eventIdx !== modules.deposit.timeline.length - 1"
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              />
              <div class="relative flex space-x-3">
                <div>
                  <span
                    :class="[
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                    ]"
                  >
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="text-sm text-gray-500">
                      {{ event.content }}
                      <a :href="event.href" class="font-medium text-gray-900">{{
                        event.target
                      }}</a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <time :datetime="event.datetime">{{ event.date }}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line no-unused-vars
import { inject } from "vue";

const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];
export default {
  name: "Home",
  // components: {
  //   installmentUz: defineAsyncComponent(() =>
  //     import(`../components/uz/installment.vue`)
  //   ),
  //   installmentTj: defineAsyncComponent(() =>
  //     import(`../components/tj/installment.vue`)
  //   ),
  // },
  setup() {
    const config = inject("countryConfigs");
    console.log(config);
    const modules = config.modules[config.country];
    console.log(modules);
    return {
      config,
      stats,
      modules,
    };
  },
};
</script>
