setTimeout(function(){
	$('.loader__bg').fadeToggle();
}, 2500);

const button = document.querySelector(".button__modal");

button.addEventListener('click', function() {
swal("Введите свою почту", {
   content: {
    element: "input",
    
    attributes: {
      placeholder: "Ваш Email",
      type: "text",
    },

  },

    buttons: ["Выйти", "Отправить заявку"],

	})
	
	.then((willDelete) => {
  if (willDelete) {
    swal("Ваша заявка была отправлена", {
      icon: "success",
    });
  } else {
    swal("введите свою почту чтобы связаться с нами", {
    	icon: "warning",
    });

  }
});

});




const buttonSmall = document.querySelector(".button-small");
buttonSmall.addEventListener('click', function() {
swal("Введите свою почту", {
   content: {
    element: "input",
    
    attributes: {
      placeholder: "Ваш Email",
      type: "text",
    },

  },

    buttons: ["Выйти", "Отправить заявку"],

	})
	
	.then((willDelete) => {
  if (willDelete) {
    swal("Ваша заявка была отправлена", {
      icon: "success",
    });
  } else {
    swal("введите свою почту чтобы связаться с нами", {
    	icon: "warning",
    });

  }
});

});

const buttonJs = document.querySelector(".button-small-js");
buttonJs.addEventListener('click', function() {
swal("Введите свою почту", {
   content: {
    element: "input",
    
    attributes: {
      placeholder: "Ваш Email",
      type: "text",
    },

  },

    buttons: ["Выйти", "Отправить заявку"],

	})
	
	.then((willDelete) => {
  if (willDelete) {
    swal("Ваша заявка была отправлена", {
      icon: "success",
    });
  } else {
    swal("введите свою почту чтобы связаться с нами", {
    	icon: "warning",
    });

  }
});

});

const buttonFooter = document.querySelector(".footer__btn");
buttonFooter.addEventListener('click', function() {
swal("Введите свою почту", {
   content: {
    element: "input",
    
    attributes: {
      placeholder: "Ваш Email",
      type: "text",
    },

  },

    buttons: ["Выйти", "Отправить заявку"],

	})
	
	.then((willDelete) => {
  if (willDelete) {
    swal("Ваша заявка была отправлена", {
      icon: "success",
    });
  } else {
    swal("введите свою почту чтобы связаться с нами", {
    	icon: "warning",
    });

  }
});

});


const buttonBig = document.querySelector(".button__big");
buttonBig.addEventListener('click', function() {
swal("Введите свою почту", {
   content: {
    element: "input",
    
    attributes: {
      placeholder: "Ваш Email",
      type: "text",
    },

  },

    buttons: ["Выйти", "Отправить заявку"],

	})
	
	.then((willDelete) => {
  if (willDelete) {
    swal("Ваша заявка была отправлена", {
      icon: "success",
    });
  } else {
    swal("введите свою почту чтобы связаться с нами", {
    	icon: "warning",
    });

  }
});

});
