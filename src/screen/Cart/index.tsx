import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import CartProduct from "../../components/data/CartProduct";
const Cart = () => {
    const Items = useSelector((state) => {
        return state.cart.CartList;
      });
    const priceItems = (total,i) => {
        const price = total + Items[i].price * Items[i].quantity
        return price
    }
    const totalcheck = () => {
        let totalPrice = 0;
        for(let i=0;i<Items.length;i++){
            if (Items[i].ischeck === true) {
                totalPrice = priceItems(totalPrice,i)
            }
        }
        return totalPrice.toFixed(2); 
    }

    useEffect(()=> {
        totalcheck();
    },[Items])
   
    return(
        <View style={styles.root}>
            <Text style={styles.title}>Cart</Text>
            <FlatList 
            data={Items}
            renderItem={({item}) => <CartProduct cartItem={item} />}
            />
            <Text>Total : {totalcheck()}</Text>
        </View>
    );
    
}
const styles = StyleSheet.create({
    root: {
        marginTop: 30,
    },
    title: {
        textAlign: 'center'
    }
})

export default Cart;