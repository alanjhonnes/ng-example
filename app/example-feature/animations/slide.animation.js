angular.module('myApp.exampleFeature')
  .animation('.slide', function () {
    var _this = this;
    this.enterQueue = [];
    this.moveQueue = [];
    this.leaveQueue = [];

    var scheduledForEnter = false;
    var scheduledForMove = false;
    var scheduledForLeave = false;

    return {
      enter: function (element, doneFn, options) {
        doneFn();
        var previousTween = _this.enterQueue.find((item => item.target === element));
        console.log(_this.enterQueue);
        if (previousTween) {
          previousTween.data();
          previousTween.progress(1);
          previousTween.kill();
        }
        var tween = TweenMax.from(element, 1, {
          opacity: 0,
          x: '-=200px',
          onComplete: enterTweenCompleted,
          onCompleteParams: ["{self}", doneFn],
          data: doneFn,
          delay: _this.enterQueue.length * 0.1
        });

        _this.enterQueue = [..._this.enterQueue, tween];
        _this.scheduledForEnter = true;
        setTimeout(dispatchEnter, 0);
      },
      move: function (element, doneFn, options) {
        var previousTween = _this.moveQueue.find((item => item.target === element));
        if (previousTween) {
          previousTween.progress(1);
          previousTween.kill();
        }
        var tween = TweenMax.fromTo(element, 1, {opacity: 0, x: '-=200px'}, {
          opacity: 0,
          x: '0px',
          data: doneFn,
          onComplete: moveTweenCompleted,
          onCompleteParams: ["{self}", doneFn],
          delay: _this.moveQueue.length * 0.1
        });

        _this.moveQueue = [..._this.moveQueue, tween];
        _this.scheduledForMove = true;
        setTimeout(dispatchMove, 0);
      },
      leave: function (element, doneFn, options) {
        // var previousTween = _this.enterQueue.find((item => item.target === element));
        // console.log(_this.leaveQueue);
        // if (previousTween) {
        //   previousTween.data();
        //   // previousTween.progress(1);
        //   // previousTween.kill();
        // }

        TweenMax.killTweensOf(element);

        var $element = $(element);
        $element.css('top', $element.offset().top);

        var tween = TweenMax.to(element, 0.6,
          {
            opacity: 0,
            x: '+=200px',
            data: doneFn,
            onComplete: leaveTweenCompleted,
            onCompleteParams: ["{self}", doneFn],
            // delay: _this.leaveQueue.length * 0.05
          }
        );

        _this.leaveQueue = [..._this.leaveQueue, tween];
        _this.scheduledForLeave = true;
        setTimeout(dispatchLeave, 0);
      }
    };

    function enterTweenCompleted(tween, doneFn) {
      _this.enterQueue = _this.enterQueue.filter(item => item !== tween);
      doneFn();
    }

    function moveTweenCompleted(tween, doneFn) {
      _this.moveQueue = _this.moveQueue.filter(item => item !== tween);
      doneFn();
    }

    function leaveTweenCompleted(tween, doneFn) {
      _this.leaveQueue = _this.leaveQueue.filter(item => item !== tween);
      doneFn();
    }

    function dispatchEnter() {
      console.log('dispatchEnter called');
      if (_this.scheduledForEnter) {
        console.log('dispatchEnter');
        _this.scheduledForEnter = false;
        _this.enterQueue = [];
      }
    }

    function dispatchMove() {
      if (_this.scheduledForMove) {
        console.log('dispatchMove');
        _this.moveQueue.forEach(tween => tween.target[0].position = 'absolute');
        _this.scheduledForMove = false;
        _this.moveQueue = [];
      }
    }

    function dispatchLeave() {
      console.log('dispatchLeave called');
      if (_this.scheduledForLeave) {
        console.log('dispatchLeave');
        _this.leaveQueue.forEach(tween => {
          var $element = $(tween.target).css('position', 'absolute')
        });
        _this.scheduledForLeave = false;
        _this.leaveQueue = [];
      }
    }


  });