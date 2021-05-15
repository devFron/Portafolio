export const Game =( )=>{

    let $winModule = document.querySelector('.valitdations__options')
    let $itemsModule = document.querySelector('.items__options')
    let $winTitle = document.querySelector('.win__title')
    let $housePicked = document.querySelectorAll('.validations__options__image')
    let $housePickedBox = document.querySelectorAll('.validations__options__image__box')
    let $scoreNumber = document.querySelector('.score__number')
    let i = 0 
    $scoreNumber.textContent = i

    const PointsGame = (userResponse)=>{
        let num = Math.floor( ( Math.random() * (5-0)  )+0);
        let options = ['scissors','paper','spock','lizard','rock']
        let getOption = options[num]
        if (userResponse === 'rock') {
            switch (getOption) {
                case 'rock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'are tied'
                    $housePickedBox[0].classList.add('rock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('rock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-rock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-rock.svg'
                break;

                case 'paper':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('rock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-rock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-paper.svg'
                break;
                    
                case 'scissors':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')        
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('rock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('scissors')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-rock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-scissors.svg'
                break;

                case 'lizard':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')        
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('rock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-rock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-lizard.svg'
                break;
                    
                case 'spock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')        
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('rock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('spock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-rock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-spock.svg'
                break;
            
                default:
                    console.log('error');
                break;
            }
        }else if(userResponse === 'paper'){

            switch (getOption) {
                case 'paper':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'are tied'
                    $housePickedBox[0].classList.add('paper')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-paper.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-paper.svg'
                break;
                case 'rock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('paper')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('rock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-paper.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-rock.svg'
                break;
                case 'scissors':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('paper')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('scissors')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('rock')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-paper.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-scissors.svg'
                break;
                case 'lizard':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('paper')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('rock')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-paper.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-lizard.svg'
                break;
                case 'spock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('paper')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[1].classList.add('spock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePickedBox[1].classList.remove('rock')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-paper.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-spock.svg'
                break;
                default:
                    console.log('error');
                break;
            }

        }else if(userResponse === 'spock'){
            switch (getOption) {
                case 'spock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'are tied'
                    $housePickedBox[0].classList.add('spock')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('spock')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-spock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-spock.svg'    
                break;
                case 'paper':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('spock')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-spock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-paper.svg' 
                break;
                case 'scissors':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('spock')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('scissors')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-spock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-scissors.svg'
                break;
                case 'lizard':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('spock')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('lizard')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-spock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-lizard.svg'
                break;
                case 'rock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('spock')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('rock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-spock.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-rock.svg'
                break;
                default:
                    console.log('error');
                break;
            }

        }else if(userResponse === 'lizard'){
            switch (getOption) {
                case 'lizard':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'are tied'
                    $housePickedBox[0].classList.add('lizard')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('lizard')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-lizard.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-lizard.svg'    
                    
                break;
                case 'paper':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('lizard')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-lizard.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-paper.svg'    
                    
                break;
                case 'scissors':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('lizard')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('scissors')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('spock')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-lizard.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-scissors.svg'    
                    
                break;
                case 'rock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('lizard')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-lizard.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-rock.svg'    
                    
                break;
                case 'spock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('lizard')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('scissors')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('spock')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-lizard.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-spock.svg'    
                    
                break;
                default:
                    console.log('error');
                break;
            }

        }else if(userResponse === 'scissors'){
            switch (getOption) {
                case 'rock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('scissors')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('rock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-scissors.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-rock.svg'
                break;
                case 'paper':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('scissors')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-scissors.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-paper.svg'
                break;
                case 'scissors':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'are tied'
                    $housePickedBox[0].classList.add('scissors')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('scissors')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('rock')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-scissors.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-scissors.svg'
                break;
                case 'lizard':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you win'
                    $housePickedBox[0].classList.add('scissors')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('lizard')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('spock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-scissors.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-lizard.svg'
                break;
                case 'spock':
                    $winModule.classList.add('valitdations__options__enabled')
                    $itemsModule.classList.add('items__options__disabled')
                    $winTitle.textContent = 'you lose'
                    $housePickedBox[0].classList.add('scissors')
                    $housePickedBox[0].classList.remove('rock')
                    $housePickedBox[0].classList.remove('lizard')
                    $housePickedBox[0].classList.remove('spock')
                    $housePickedBox[0].classList.remove('paper')
                    $housePickedBox[1].classList.add('spock')
                    $housePickedBox[1].classList.remove('paper')
                    $housePickedBox[1].classList.remove('lizard')
                    $housePickedBox[1].classList.remove('rock')
                    $housePickedBox[1].classList.remove('scissors')
                    $housePicked[0].src = '../resources/images/big-bang-images/icon-scissors.svg'
                    $housePicked[1].src = '../resources/images/big-bang-images/icon-spock.svg'
                break;
            
                default:
                    console.log('error');
                break;
            }

        } 
    }
    const scoreGame =(e) => {
        let $validationBox = document.querySelector('.valitdations__options')
        let $winTitleContent = $winTitle.textContent

        if($validationBox.classList.contains('valitdations__options__enabled')){
            switch ($winTitleContent) {
                case 'you win':
                    i = i + 1
                    $scoreNumber.textContent = i
                    break;
                    case 'you lose':
                        if (i < 0) {
                        i = 0
                        $scoreNumber.textContent = i
                    }else if(i > 0){
                        i = i - 1
                        $scoreNumber.textContent = i
                    }
                break;
                case 'are tied':
                break;
                default:
                    console.log('error');
                break;
            }
        }
    }
    document.addEventListener('click',(e)=>{
        if (e.target.matches('.item__option')) {
            let userResponse = e.target.dataset.item
            PointsGame(userResponse)
        }else if (e.target.matches('.item__option__image')) {
            let userResponse = e.target.dataset.image
            PointsGame(userResponse)
        }

        if(e.target.matches('.win__play')){
            $winModule.classList.remove('valitdations__options__enabled')
            $itemsModule.classList.remove('items__options__disabled')
        }

        if(e.target.matches('.item__option')){
            scoreGame(e)
        }else if(e.target.matches('.item__option__image')){
            scoreGame(e)
        }
    })
}