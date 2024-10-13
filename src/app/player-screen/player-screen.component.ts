import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-player-screen',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './player-screen.component.html',
  styleUrl: './player-screen.component.css',
})
export class PlayerScreenComponent {
  currentQuestionIndex = 0;
  currentPrizeIndex = 0;
  selectedAnswer: string = '';
  isAnswered = false;
  gameOver = false;

   prizeList = [
    '1,000',
    '2,000',
    '3,000',
    '5,000',
    '10,000',
    '20,000',
    '40,000',
    '80,000',
    '1,60,000',
    '3,20,000',
    '6,40,000',
    '12,50,000',
    '25,00,000',
    '50,00,000',
    '75,00,000',
    '1,00,00,000',
    '7,50,00,000',
  ];

  questions = [
    {
      question: 'Who is the current President of India?',
      options: [
        'Narendra Modi',
        'Draupadi Murmu',
        'Amit Shah',
        'Arvind Kejriwal',
      ],
      correctAnswer: 'Draupadi Murmu',
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'Berlin', 'London', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      question: 'Who wrote the famous book "1984"?',
      options: [
        'George Orwell',
        'J.K. Rowling',
        'Mark Twain',
        'Ernest Hemingway',
      ],
      correctAnswer: 'George Orwell',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'O2', 'NaCl'],
      correctAnswer: 'H2O',
    },
    {
      question: 'In which year did India gain independence?',
      options: ['1947', '1950', '1965', '1971'],
      correctAnswer: '1947',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Vincent van Gogh',
        'Michelangelo',
      ],
      correctAnswer: 'Leonardo da Vinci',
    },
    {
      question: 'Which country is the largest by area?',
      options: ['Russia', 'Canada', 'China', 'United States'],
      correctAnswer: 'Russia',
    },
    {
      question: 'Who discovered penicillin?',
      options: [
        'Alexander Fleming',
        'Marie Curie',
        'Isaac Newton',
        'Louis Pasteur',
      ],
      correctAnswer: 'Alexander Fleming',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      options: [
        'Atlantic Ocean',
        'Indian Ocean',
        'Arctic Ocean',
        'Pacific Ocean',
      ],
      correctAnswer: 'Pacific Ocean',
    },
    {
      question: 'Who is known as the "Father of the Nation" in India?',
      options: [
        'Subhas Chandra Bose',
        'Mahatma Gandhi',
        'Jawaharlal Nehru',
        'Sardar Patel',
      ],
      correctAnswer: 'Mahatma Gandhi',
    },
    {
      question: 'What is the square root of 64?',
      options: ['6', '7', '8', '9'],
      correctAnswer: '8',
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      correctAnswer: 'France',
    },
    {
      question: 'Which element has the atomic number 1?',
      options: ['Helium', 'Oxygen', 'Hydrogen', 'Nitrogen'],
      correctAnswer: 'Hydrogen',
    },
    {
      question: 'What is the hardest natural substance on Earth?',
      options: ['Gold', 'Iron', 'Diamond', 'Silver'],
      correctAnswer: 'Diamond',
    },
    {
      question: 'Who was the first man to step on the Moon?',
      options: [
        'Yuri Gagarin',
        'Neil Armstrong',
        'Buzz Aldrin',
        'Michael Collins',
      ],
      correctAnswer: 'Neil Armstrong',
    },
    {
      question: 'Which Indian city is known as the "Silicon Valley of India"?',
      options: ['Mumbai', 'Hyderabad', 'Bangalore', 'Chennai'],
      correctAnswer: 'Bangalore',
    },
  ];
  submitAnswer(selectedOption: string) {
    this.selectedAnswer = selectedOption;
    this.isAnswered = true;

    const correctAnswer = this.questions[this.currentQuestionIndex].correctAnswer;
    if (selectedOption === correctAnswer) {
      this.currentPrizeIndex = this.currentQuestionIndex; 
    } else {
      this.currentPrizeIndex = this.currentPrizeIndex > 0 ? this.currentPrizeIndex - 1 : 0;
      this.gameOver = true;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.isAnswered = false;
      this.selectedAnswer = '';
    } else {
      alert('Congratulations! You have answered all questions.');
      this.resetGame();
    }
  }

  endGame() {
    alert('Thank you for playing! You have won ₹ ' + this.prizeList[this.currentPrizeIndex]);
    this.resetGame();
  }

  resetGame() {
    this.currentQuestionIndex = 0;
    this.currentPrizeIndex = 0;
    this.isAnswered = false;
    this.selectedAnswer = '';
    this.gameOver = false;
  }
}
