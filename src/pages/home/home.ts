import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { QuizProvider } from "../../providers/quiz/quiz";
import { Storage } from "@ionic/storage";
import { GameViewPage } from "../game-view/game-view";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  option: {
    category: number;
    difficulty: string;
    quizNum: number;
  };

  constructor(
    public navCtrl: NavController,
    private quizProvider: QuizProvider,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.storage.set("quizzes", JSON.stringify(this.quizProvider.getQuiz()));
  }

  start() {
    this.navCtrl.setRoot(GameViewPage);
    this.storage.set("quizIndex", 0);
    this.storage.set("results", []);
  }
}
