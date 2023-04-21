import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from './';

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<p className='logo'>
				<Link href='/'>Chris Headphones</Link>
			</p>

			<button
				type='button'
				className='cart-icon'
				onClick=''
			>
				<AiOutlineShopping />
				<span className='cart-item-qty'>0</span>
			</button>

			<Cart />
		</div>
	);
};

export default Navbar;
