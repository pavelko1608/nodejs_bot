const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
const data = require("./data.json")
const logic = require("./logic")
const User = require("./models/User")
const bot = new Telegraf("454019729:AAGaL3SYPxdoteLU-N2UsKEevp6F0zECo7s")

bot.start((ctx) => {
    console.log('started:', ctx.from.id)
    let username = ctx.message.from.username
    let user = new User()
    user.username = username
    user.username_id = ctx.message.from.id
    ctx.reply('Welcome!' + " " + ctx.message.from.username + "\n" + "Please enter your groups below:", Markup.keyboard([
        ['Алгоритмы 1', 'Алгоритмы 2', 'Алгоритмы 3', 'Алгоритмы 4', 'Алгоритмы 5'],
      ]).oneTime().extra()
    )
    let alg_practice_group
    let data_processing_group
    let ukr_group
    let pt_group
    let calc_group
    let discmath_group
    let eom_group

    let regex = new RegExp(/Алгоритмы [1-5]/g)
    
    bot.hears(regex, (ctx_1) => {
      alg_practice_group = parseInt(ctx_1.message.text[ctx_1.message.text.length - 1])
      user.Alg_practice = alg_practice_group
      console.dir(user)
      ctx_1.reply("Обработка данных", Markup.keyboard([
        ['ОД 1', 'ОД 2', 'ОД 3', 'ОД 4', 'ОД 5']
      ]).oneTime().extra()
      )
      regex = new RegExp(/ОД [1-5]/g)
      bot.hears(regex, (ctx_2) => {
        data_processing_group = parseInt(ctx_2.message.text[ctx_2.message.text.length-1])
        user.Data_processing_practice = data_processing_group
        console.dir(user)
        ctx_2.reply("Укр яз", Markup.keyboard([
            ["Укр яз 5", "Укр яз 6", "Укр яз 7"]
          ]).oneTime().extra()
        )
        regex = new RegExp(/Укр яз [5-7]/g)
        bot.hears(regex, (ctx_3) => {
          ukr_group = parseInt(ctx_3.message.text[ctx_3.message.text.length - 1])
          user.ukr = ukr_group
          console.dir(user)
          ctx_3.reply("Физра", Markup.keyboard([
            ["Физра 1", "Физра 2"]
            ]).oneTime().extra()
          )
          regex = new RegExp(/Физра [1-2]/g)
          bot.hears(regex, (ctx_4) => {
            pt_group = parseInt(ctx_4.message.text[ctx_4.message.text.length - 1])
            user.PT = pt_group
            console.dir(user)
            ctx_4.reply("Матан", Markup.keyboard([
                ["матан 1", "матан 2"]
              ]).oneTime().extra()
            )
            regex = new RegExp(/матан [1-2]/g)
            bot.hears(regex, (ctx_5) => {
              calc_group = parseInt(ctx_5.message.text[ctx_5.message.text.length - 1])
              user.Calculus_practice = calc_group
              console.dir(user)
              ctx_5.reply("Дискотека", Markup.keyboard([
                  ["дискотека 1", "дискотека 2"]
                ]).oneTime().extra()
              )
              regex = new RegExp(/дискотека [1-2]/g)
              bot.hears(regex, (ctx_6) => {
                discmath_group = parseInt(ctx_6.message.text[ctx_6.message.text.length - 1])
                user.Discmath_practice = discmath_group
                console.dir(user)
                ctx_6.reply("ЕОМ", Markup.keyboard([
                    ["EOM 1", "EOM 2", "EOM 3", "EOM 4", "EOM 5"]
                  ]).oneTime().extra()
                )
                regex = new RegExp(/EOM [1-5]/g)
                bot.hears(regex, (ctx_7) => {
                    eom_group = parseInt(ctx_7.message.text[ctx_7.message.text.length - 1])
                    user.EOM_practice = eom_group
                    console.dir(user)
                    user.save()
                  })
              })
            })
          })
        })
      })
      
    })
      
    
  




  
})
bot.hears("schedule", (ctx) => {
  let currWeek = 2
  let day = 2
  let user
  let res = ""
  User.findOne({username_id: ctx.message.from.id}, (err, result) => {
    for (key in data[day-1].subjects) {
        let subject = data[day-1].subjects[key].name
        console.log(subject)
        console.log(res)
        if(data[day-1].subjects[key].groups){
          let groups = data[day-1].subjects[key].groups
          for (let i = 0; i < groups.length; i++) {
            // console.log(data[day-1].subjects[key])
            // console.log(data[day-1].subjects[key][i])
            //console.log(result)
            console.log(groups[i])
            //SOLVE THE PROBLEM WHEN THERE ARE TWO CLASSES ONE AFTER ANOTHER
            if(subject === "Alg_practice" && groups[i].number === result.Alg_practice && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Алгоритмы и структуры данных в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "Data_processing_practice" && groups[i].number === result.Data_processing_practice && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Обработка данных в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "ukr" && groups[i].number === result.ukr && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Укр яз в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "PT" && groups[i].number === result.PT && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Физра в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "Calculus_practice" && groups[i].number === result.Calculus_practice && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Матан в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "Discmath_practice" && groups[i].number === result.Discmath_practice && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "Дискотека в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
            if(subject === "EOM_practice" && groups[i].number === result.EOM_practice && groups[i].weeks.indexOf(currWeek) > -1) {
              res += "ЕОМ в аудитории номер " + groups[i].room + " не позже " + groups[i].time + "\n"
              break
            }
          }
        } else {
          if(data[day-1].subjects[key].weeks.indexOf(currWeek) > -1) {
            res += subject +  " в аудитории номер " + data[day-1].subjects[key].room + " не позже " + data[day-1].subjects[key].time + "\n"
          }
        }
    }
    ctx.reply(res)
  })
})
bot.hears("roma", (ctx) => {
  console.log(ctx.message)
})
bot.hears("week", (ctx) => {
  let date = new Date()
  ctx.reply(logic.num_of_week(date))
})

bot.startPolling()


