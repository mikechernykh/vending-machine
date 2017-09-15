import { Injectable, OnInit } from '@angular/core';

import { Coin } from '../model/Coin';
import { CoinInfo } from '../model/CoinInfo';
import { DignityOfCoin } from '../service/DignityOfCoin';

@Injectable()
export class UserCoinService implements OnInit {
    coinInfo: CoinInfo[] = [
        { coin: { value: DignityOfCoin.ONE }, balance: 10 },
        { coin: { value: DignityOfCoin.TWO }, balance: 30 },
        { coin: { value: DignityOfCoin.FIVE }, balance: 20 },
        { coin: { value: DignityOfCoin.TEN }, balance: 15 },
    ];

    constructor() {}

    ngOnInit() {
    }

    getCoinInfo(): CoinInfo[] {
        return this.coinInfo;
    }

    reduceCoin(arg: CoinInfo): Promise<Coin> {
        const index = this.coinInfo.indexOf(arg);
        if (this.coinInfo[index].balance === 0) {
            return Promise.reject(`No such coin: Dignity of ${ arg.coin.value }`);
        } else {
            this.coinInfo[index].balance--;
            return Promise.resolve<Coin>(this.coinInfo[index].coin);
        }
    }

    increaseCoin(coins: Coin[]): void {
        // while (sum > 0) {
        //     if (sum - 10 >= 0) {
        //         this.coinInfo[3].balance++;
        //         sum -= 10;
        //     } else if (sum - 5 >= 0) {
        //         this.coinInfo[2].balance++;
        //         sum -= 5;
        //     } else if (sum - 2 >= 0) {
        //         this.coinInfo[1].balance++;
        //         sum -= 2;
        //     } else {
        //         this.coinInfo[0].balance++;
        //         sum -= 1;
        //     }
        // }
        for (const coin of coins) {
            if (coin.value === DignityOfCoin.TEN) {
                this.coinInfo[3].balance++;
            } else if (coin.value === DignityOfCoin.FIVE) {
                this.coinInfo[2].balance++;
            } else if (coin.value === DignityOfCoin.TWO) {
                this.coinInfo[1].balance++;
            } else {
                this.coinInfo[0].balance++;
            }
        }
    }
}
