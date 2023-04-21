import { Request, Response } from 'express';

import { spawn } from 'child_process';
import { SpoonClient, SnsType, Country, LiveEvent } from '@sopia-bot/core';

export const getMain = async (req: Request, res: Response) => {
  try {
    const id = '1012341234';
    const pw = '12341234';
    const spoon = new SpoonClient('deviceUUID');
    spoon.country = Country.KOREA;
    await spoon.init();

    const logonUser = await spoon.login(id, pw, SnsType.PHONE);
    const req = await spoon.api.lives.access(33482524);

    const [live] = req.res.results;
    const soket = await live.join();
    soket.on(LiveEvent.LIVE_MESSAGE, (data) => {
      console.log('data>', data);
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
