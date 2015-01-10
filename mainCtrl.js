(function() {
    angular
        .module('Closeness')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl(QuestionService) {
        var vm = this;
        vm.changeQuestion = changeQuestion;
        var questions = QuestionService.getQuestions();
        var currIndex = 0;
        vm.currQuest = questions[currIndex];

        function changeQuestion(change) {
            currIndex += change;
            if (currIndex < 0) currIndex = 0;
            if (currIndex > questions.length - 1) currIndex = questions.length - 1;
            vm.currQuest = questions[currIndex];
        }
    }
})();
