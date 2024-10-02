import {driver} from '@wdio/globals'


export default async function scroll(fromY,toY, durationParam){
    await driver
    .action('pointer')
    .move({ x: 540, y: fromY })
    .down()
    .pause(200)
    .move({ x: 540, y: toY, duration: durationParam })
    .up()
    .perform()
}