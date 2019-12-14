import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_zoom1.jpg?ims=544x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 129,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-precision-iii/72/HZM-1284-172/HZM-1284-172_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 239,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-puma-bmw-mms-smash-v2/26/D14-6398-026/D14-6398-026_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 269,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-downshifter-9-feminino/26/HZM-1280-026/HZM-1280-026_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 199,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-court-vision-mid-feminino/04/HZM-2601-004/HZM-2601-004_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 299,99</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-hocks-coruna/06/B68-0530-006/B68-0530-006_detalhe2.jpg?ims=326x"
          alt=""
        />
        <strong>Tênis Maneiro</strong>
        <span>R$ 279,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
