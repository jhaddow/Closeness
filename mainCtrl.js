(function() {
    angular
        .module('Closeness')
        .controller('MainCtrl', MainCtrl);

    function MainCtrl(QuestionService) {
        var vm = this;
        vm.changeQuestion = changeQuestion;
        var questions = QuestionService.getQuestions();
        vm.currIndex = 0;
        vm.len = questions.length;
        vm.currQuest = questions[vm.currIndex];

        function changeQuestion(change) {
            vm.currIndex += change;
            if (vm.currIndex < 0) vm.currIndex = 0;
            if (vm.currIndex > vm.len - 1) vm.currIndex = vm.len - 1;
            vm.currQuest = questions[vm.currIndex];
        }
    }
})();
