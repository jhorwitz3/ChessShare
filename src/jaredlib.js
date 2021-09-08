import black_pawn from './imgs/black_pawn.png';
import black_rook from './imgs/black_rook.png';
import black_knight from './imgs/black_knight.png';
import black_bishop from './imgs/black_bishop.png';
import black_queen from './imgs/black_queen.png';
import black_king from './imgs/black_king.png';

import white_pawn from './imgs/white_pawn.png';
import white_rook from './imgs/white_rook.png';
import white_knight from './imgs/white_knight.png';
import white_bishop from './imgs/white_bishop.png';
import white_queen from './imgs/white_queen.png';
import white_king from './imgs/white_king.png';
  
  //helper method to get the image and description of the piece
  export function getPiece(piece_notation){
    let piece;
    let alt;

    switch (piece_notation) {
      //black pieces
      case 'bp':
            piece = black_pawn;
            alt = 'black pawn';
            break;
      case 'br':
        piece = black_rook;
        alt = 'black rook';
        break;
      case 'bn':
        piece = black_knight;
        alt = 'black knight';
        break;      
      case 'blb':
          piece = black_bishop;
          alt = 'black light-squared bishop';
          break;
      case 'bdb':
        piece = black_bishop;
        alt = 'black dark-squared bishop';
        break;
      case 'bq':
        piece = black_queen;
        alt = 'black pawn';
        break;
      case 'bk':
        piece = black_king;
        alt = 'black pawn';
        break;
      
      //white pieces
      case 'wp':
        piece = white_pawn;
        alt = 'white pawn';
        break;
      case 'wr':
        piece = white_rook;
        alt = 'white rook';
        break;
      case 'wn':
        piece = white_knight;
        alt = 'white knight';
        break;      
      case 'wlb':
          piece = white_bishop;
          alt = 'white light-squared bishop';
          break;
      case 'wdb':
        piece = white_bishop;
        alt = 'white dark-squared bishop';
        break;
      case 'wq':
        piece = white_queen;
        alt = 'white pawn';
        break;
      case 'wk':
        piece = white_king;
        alt = 'white pawn';
        break;

      default:
        console.log('Unexpected type');
        break;
    }

    return {piece, alt};
  }