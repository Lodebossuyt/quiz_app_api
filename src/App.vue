<template>
  <div class="antialiased text-gray-700">
    <div class="flex w-full h-screen justify-center items-center">
      <div class="max-w-lg w-full">
        <h1 class="font-bold text-5xl text-center text-indigo-700">Simple Quiz</h1>
        <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
          <p class="text-2xl font-bold">
           {{quizes.results[0].question}}
          </p>
          <label for="a" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg">
            <input type="radio" id="a" class="hidden">
            {{quizes.results[0].correct_answer}}
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import quizservice from "../services/quizservice";

export default {
  data() {
    return {
      quizes: null,
    }
  },
  created() {
    quizservice.getAll().then(response => {
      this.quizes = response.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>

<style>

</style>
