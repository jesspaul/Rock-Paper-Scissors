//Defining each HTML element as a JS variable
let opponentHand = document.getElementById('opponent');
let playerHand = document.getElementById('player');

let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');

let submitButton = document.getElementById('submit');
let resetButton = document.getElementById('reset');


//Code for each option button to click
let optionButtons = [rockButton, paperButton, scissorsButton];
let fillColor = '#F9C79E'

let selectColor = function(button) {
  rockButton.style.backgroundColor = '';
  paperButton.style.backgroundColor = '';
  scissorsButton.style.backgroundColor = '';
  button.target.style.backgroundColor = fillColor;
}

let buttonEvents = function(button) {
  button.addEventListener('click', selectColor);
}

optionButtons.forEach(buttonEvents);

//Adding functionality to submit button
let options = ['Rock', 'Paper', 'Scissors'];
let tieMessage = "It's a tie.";
let winMessage = "Congratulations, you win!";
let loseMessage = "Sorry, you lose!";

submitButton.onclick = function() {
  submitButton.hidden = true;
  document.getElementById('player').style.visibility = 'visible';
  document.getElementById('opponent').style.visibility = 'visible';
  if (rockButton.style.backgroundColor != '') {
    playerImage.src = 'https://lh3.googleusercontent.com/IfwUNv096qAgRWJHbt0FHrhK9lBgRu817qjoB9sTAq_x2CjeJfERtzajIjcV27G32wUp8mW_YBO1UUHLBNEIwRvbZSYE5ODo6kARIYNwGuJOEiUqYmtjNwAa1UfhXhjEOYtbUx5xH21LN6Gkq3Gg4YjLl8QR0f_wvwxu-w12QF5jSt_vEGQXTNlvR7U7A6KQpvnUlCKUeijVveU_qEMnEwh5F5Yj30ENp0DkDX_H48XLMmdFl6jRlL1xh3jGLALSOHSXzUvmNjNMAR4zUKg-tWUOJu3ryAhQwF3Dus6sjttbSOdCKkeLcXQbBA4mYuY-xoJMBUOSzCnHZvfDKiOwRLmVpZnnf8dZxGG4bMvMFQ-tmKFLjLJiLmMwtX30w5Oz8jLe3-fHhtugGEgGpyW3X90corTG_5jE4Qj7KjogNVJRQiZy2IT1xH3RFge65j_RdQucxLNcytm0OS_YjaG_EYMxZRmt6o8u0qg2u_0-PE1bW4J1QYx_iLXTozVcl__jxQzGLIoXvBCZ2rG-_-PM7PaIGmx8qsmkjF1STA45XoEk4CpayxEl0ikNzUdF0NskIMxQJDSfvGPRndCO_nGIUxdts3W56DNldBMEeiWloqpRHa2W3qxaWpDcFR14n0hm2j-YTgTu_0hz1lqTOMpIFXbKVy3N_OFvl-N3BAO1vx6dFk64xS_SrswmjlwFcw=s235-no';
    document.getElementById('player').innerHTML = 'Rock';
  } else if (paperButton.style.backgroundColor != '') {
    playerImage.src = 'https://lh3.googleusercontent.com/LV1N3RPrniWLYiZmEDcC8Xc16IlZ-fNEdR4mIpls959imt8VxeZMNLnVrp1PU60Ptxi4-7RxcKYBZvB4UwpkAzX_PAB_ktmJjK1rIMv7UVgrHBJY_I9wbjZ3YL3KTfQbIX8wXUwUh2-ol8n9upPgbSkKcsbHSZD1BceyOArXl-vcEjN_NiXLs8hN4lyBdUwSjdCMV_x-FzIsv_S4LbaVuLgf8Xu7tevRuJLp_kEO10tJSQM-Z0crVyiFjaKNrv-dDtBzZew_zxXSFVaiqaX3HOCEues8IeaABJZVZ2exL9fOMzsYLOogk0KhnFcDhdax2CrVKvYlEmEa39GIZsGr5io6K0plFCEUXQrl-R3I4qFekUr9KZB0EMvPcbHnlGmKb3pJSQl9RmkvvK1iJX0nZukQsOwazyaUExGJO4q-KgHnE8Bkek7n5SCMwnSKDdONpRIoPPns5lqRmC4L8IpLkx9gvxy9ZFAnDo4aK2wciHWzp39Fki1flWvhD3PTT37zGrkIvD4OgEqhSiD9YiNvv-oyOLg2ZM5JbIEa0YNhE6vXHYqRLbNxCARcHMDCLPETH6vGrbeRtHOewbHLWmdWFjSYWsZx_n4I_oy8ULcjR59GJD5TywJqpqzeGHGDR8tvU7MTlQg_jwt5Jk0I3HRos5n3ImVYvpq15MuAEd_clMiESZj71UjEo0c5ZYmwxQ=w256-h255-no';
    document.getElementById('player').innerHTML = 'Paper';
  } else if (scissorsButton.style.backgroundColor != '') {
    playerImage.src = 'https://lh3.googleusercontent.com/8T_DEWFYM5Y9MkV0hfqW8xK7w4miJKkI8Uxeq-3JPs04Ff3lrFhGomX2ssyrd6_ao_sk7QlN1rrO0KpK4C6NG6YWtgJjbaOYuJo3u4q_FcFg-uElrYdy0JCxGyCQPvmNB6SWORlrmNntKyWZDne4R6_iXdhZ9WrKOz8OcF3M6tzNKDP1PAfhgSbzy2K2Ro3mF1gKcYgsPN2Gp9D_QHFuek5iSJA7MZcYyq0HnXOAnpCBpIaZHdWItonBYLPwmoCV3lxzHDr0g8A7Ckvq1Kz8EfJ0ES_GPfzAxMQaB71IhCViNP1eexmC4ai-19c3vhtAiaUIe_eQnJ-vJj7BkxYov3o2kC7xs9sod505bFc83bmlg7ODJ_VIBC6hWPWu61aX_Ea_8EKOj6doT4fxBAtfHX19hcAx3nL6wc43KgrITzByGbiwopC95f7jyq9HoxYPnjTSKdsdXcGY88R-SJFpdjY_d9NnONRkgK7wB7YEQ9hsn1H3LqHC6snUo129C9E2wf-WP_05VfiTr5RcdOylMa7QlJnh929qG_ExLIhRdqxBMqFp1EvI7SQW7VYVmsimjtEy8n53bKffqLtteCRADg9v1HZ8rUi6ZaAg8-OWRGTD7P1AMeXViHDnnFrq1kZ2Sl-TE5GC6faltoDj7oARvmScwN4OBEFvWu815P8iC-dds66kLbUlTbdelDM8jQ=s256-no';
    document.getElementById('player').innerHTML = 'Scissors';
  };
  
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    opponentImage.src = 'https://lh3.googleusercontent.com/zhUXPi8SPl33Id4pPTHYiz2I_S7Dkw1iTKTXiLP43avpLmSuWBAsVhDNmhmX5eSBSEoAGOCl00GfuOsRIwWywoxwA-0Ug49MthSggpC27iEmfoOj4HFzUIUg7tbM4tJVkbsHs0IDww8AAjewo0P6uDMSiOKSuqVyeqAwGITZiTGkUvhSmlUG6X-aN8ANvOkD7w-owlnMQ1NzPhEfRBia6TijNbaCrv8xxdYTlN0D9-FcYyorz_As5N5F3f-vLP-iHtRuJEu8CTcjXdnO555WYcs0O7K8PGZHkll_F-gAQWVl2r_mAQ2OgUeHSV_PDxEqFWqn82u9YLj1YPSGvvPZ1x_NGqrsbtVy0KPTkBXy-ZbjxRCQTvXpw8EuuzO25avj5gZCgweKMsl77Sn40YAMn1gjCwI6-w6q8iMZmOyFHj-DUElEZSoNr1xIjqcqM38OrwdRMfq5SKxg4yBv-zG6XiaGDcUgm6r11a34FzrNzvaDqYMBzjOadVzfcFusPU84Kz8mdunT7s_iGXJ1di2c44EZZdHRqfQrIors1CSi5G58z6UswgKL--cXNE2iJCRszvNB8N7g_ae-CW377i6ib5h5eFZtC01lDektE0sStUXCnQWDxJ9I9MfoLgl5pKJ3ZRjyqbllKn40lf3bcaunUasc9AXl9POaKHWgPvMhiMWCSu7t6HOwBVJWB5sOHg=s256-no';
    document.getElementById('opponent').innerHTML = 'Rock';
  } else if (randomNum === 1) {
    opponentImage.src = 'https://lh3.googleusercontent.com/1Zz2q-zSu1YzYrHbDWvKV9cfPcgYHDxE_JE8n_FNEG3JtNZnXLoq8Sj8u56aB_ixQWnuaKwxN7stUB1VoYoQRx6j6N5TWCWay9QLgYHrN12T6a73x6T8PgKJCG-XKYmRiIlxMGoWenQy0XhOfTimpKY1JkYXxQTAd0zOIS52Oop-5__UDgQgLnRRjadEmgw9WvmSUVc8d8iuoFZ001ZGUuXggEKK6kee4_yvDSSOV4Uf_w-xA_XouiKwSK82v_zdwZA4W44VvYy190H78RwU113d0YX8nVmXioA5WPry_oUz-g32CVyg1d_ED2O6ju83nNGDobPVwg8eaqYndyfLaI88jQiRRkiMOtBlqS9Z15mT3UBsHVrhcufloA2hIWLMjXxoGLNgRhlllSgr3TaZGb3_C8cVjkmydSjVmklVU_T4LKGDladFAi9Uja6yOmGErDjU21kkf5vZJZoAZ3SJ5cWs4tvNYtCNkF9qNpSpUM0d0J8en64ya7svTuJxU9XgIiNklJcJlF3Ijg_wIvp2iUYs8PEaIUpG1jBFjI8U9c7pmvo_1Gc9WDUrKB140QNDQuGLzzZ6_ui3omuo0zicg2srGLfebDf8DCSqaZV8laCGJQX2X49Gl5Oix19ev32bQvirPcYTt3vjsTwxRDRBZUOU4JdGuWTzTa18APh2cXapEcH1a791onnliS21rA=s342-no';
    document.getElementById('opponent').innerHTML = 'Paper';
  } else if (randomNum === 2) {
    opponentImage.src = 'https://lh3.googleusercontent.com/aKQU7IjrAzpwu9lecNwe9Rpho4ce27Tn11sp-jwoAcjcRIRGeREWZ5QMdvCFzOOYY1M_gTqOYyMvPCrL8yrV1mva8A_i8gygfaAHiH-j3jrQrE64ZXDPbYtkGUeymkrnJ1-YpYMBERPaW9iH7lzH2XFCTSewcWdog31fPjR_kGyK23yvWjfQ026TEK8qzx1oFpw6-YoNCiLqFmE4X0OnDiQGdAF25szgOnKNlrcz4jj6xYu5zDVsU3ovzVSDFmSzAa2qMTYc57McEWa-P5a-R5QPTMi5EYue8Q-ffXkXIhWY0bd9XDiGUYIlSMvG4r0z9zEheL-ijTG4sv0RZtiOql4zyLvtjeUHADHPnQLiVgAulxNYO9cGFwoflkKGcsXwqHTZHN4xexbJdOCGzY1fNARQ6_AarRetYBExR0EJs68e3fZpeIIjlwjZlAOVhApZiWK_jvg0jRzTtMjlmtPqlgeUDKEXMKLEJpU3ZoD1yxPkLxd0T_we9IWyuef0bwG_zs-rWCIgHegvB1dHFTcqTHb7LdbxkpdXOsZewReWv0mXEXt5DVtdvDIZDdnzIjtp5EH3VgO7e8il_O2NeAvaMlxR3p_WxEkIt2HaPEfiFVeT0f_LmCbRkjWhR1ZH9Tqf3OoQ0Flplj0GLHAb-K7-acunt2f6Zp-r9zs96GUjF3vt2CGykS2Iqdn2cRVeyw=w344-h342-no';
    document.getElementById('opponent').innerHTML = 'Scissors';
  }
  
  if (playerHand.innerHTML === 'Rock' && opponentHand.innerHTML === 'Rock') {
    result.innerHTML = tieMessage;
  } else if (playerHand.innerHTML === 'Rock' && opponentHand.innerHTML === 'Paper') {
    result.innerHTML = loseMessage;
  } else if (playerHand.innerHTML === 'Rock' && opponentHand.innerHTML === 'Scissors') {
    result.innerHTML = winMessage;
  } else if (playerHand.innerHTML === 'Paper' && opponentHand.innerHTML === 'Paper') {
    result.innerHTML = tieMessage;
  } else if (playerHand.innerHTML === 'Paper' && opponentHand.innerHTML === 'Rock') {
    result.innerHTML = winMessage;
  } else if (playerHand.innerHTML === 'Paper' && opponentHand.innerHTML === 'Scissors') {
    result.innerHTML = loseMessage;
  } else if (playerHand.innerHTML === 'Scissors' && opponentHand.innerHTML === 'Scissors') {
    result.innerHTML = tieMessage;
  } else if (playerHand.innerHTML === 'Scissors' && opponentHand.innerHTML === 'Rock') {
    result.innerHTML = loseMessage;
  } else if (playerHand.innerHTML === 'Scissors' && opponentHand.innerHTML === 'Paper') {
    result.innerHTML = winMessage;
  } else {
    result.innerHTML = 'You did not make a selection and lose by default.';
    playerHand.innerHTML = 'Oops!';
  };
  
  resetButton.style.display = 'inline-block';
};

//Reset game to start over
resetButton.onclick = function() {
  playerImage.src = 'https://static.vecteezy.com/system/resources/previews/000/690/838/original/rock-paper-scissors-vector-illustration.jpg';
  opponentImage.src = 'https://static.vecteezy.com/system/resources/previews/000/690/838/original/rock-paper-scissors-vector-illustration.jpg';
  playerHand.innerHTML = '';
  opponentHand.innerHTML = '';
  optionButtons.forEach(function(button) {
    button.style.backgroundColor = '';
  });
  submitButton.hidden = false;
  resetButton.style.display = 'none';
  result.innerHTML = 'Make your selection.'
};