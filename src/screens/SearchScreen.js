import React,{useState, useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{
    // console.log(props);
    const[term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsByPrice = (price)=>{

        return results.filter(results =>{
            return results.price===price;
        });
    };
   
    // console.log(results);

    return (
        // <View style={{ flex:1}}>
        <>
            <SearchBar 
            term={term} 
            onTermChange={(newTerm)=>setTerm(newTerm)}
            onTermSubmit={()=>searchApi(term)}></SearchBar>
            { errorMessage ?<Text>{errorMessage}</Text>:null}
            {/* <Text>We have found {results.length} results</Text> */}
            <ScrollView>
            <ResultsList 
            // navigation={navigation}
            results={filterResultsByPrice('$')} 
            title="Cost Effective"> 
            
            </ResultsList>
            <ResultsList
            // navigation={navigation}
            results={filterResultsByPrice('$$')} 
            title="Bit Pricier"> 

            </ResultsList>
            <ResultsList
            // navigation={navigation}
            results={filterResultsByPrice('$$$')} 
            title="Big Spender">
            
            </ResultsList>
            </ScrollView>
        {/* </View> */}
        </>
    );
};

// scroll view works differently for both android and ios
const styles = StyleSheet.create({
    textSize :{
        fontSize:20
    }
});

export default SearchScreen;

// fetch and axios are for working with APIs