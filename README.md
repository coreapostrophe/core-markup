# 📚 Core Markup

#### About

Core markup is a simple custom noting markup that aims to automate quizzing methods by parsing plain text into questions. These listed questions have their respective details and header tree which could then be utilized by quizzing apps for studying.

#### <u>Syntax</u>

##### Header Tree

Headers are defined by hashtags **"#"** like in common markdown. These simply organizes the questions so that the user could easily pinpoint the context of where they're from. This aims to resolve the confusion of multiple modules having the same question/terminology.

```
# Science		-> Header 1
## Biology		-> Header 2
### Genetics	-> Header 3

Tree Directory: Science/Biology/Genetics
```

##### Questions

Questions are simply defined by adding an asterisk **"*"** at the beginning of a line. As an alternative, adding a dollar sign **"$"** instead implies that the question is enumerable. An unenumerable question indicates a regular way of asking questions in quizzes wherein the definition/details are presented first and the actual concept/terminology is to be guessed. Enumerable questions on the other hand are the complete opposite and mostly resembles enumerative type of questions wherein the correlating details are the ones that are guessed.

```
*Regular Concept
-Detail					-> is asked first

$Enumerable Concept		-> is asked first
-Detail
-Detail
```

##### Details

Details are the information that supports questions. They are defined by adding a dash **"-"** at the beginning of a line. The details always pertain to the latest question before them. 

```
*Question
-Detail			-> Question's Detail 1
-Detail			-> Question's Detail 2
-Detail			-> Question's Detail 3
```

For regular questions with multiple details. Any one of those details are randomly selected to serve as the definition to be asked. Meanwhile, the multiple details in enumerable questions are simply the ones that are guessed and enumerated. 

##### Details as Questions

It is possible to host questions inside details. This type of nesting is made possible to accommodate supplementary information inside questions that could also be dissected into more details. The syntax is the same for every level of nesting except that they are added after the dash tag and is incremented accordingly.

```
-Question
-*Concept
--Concept Detail
--Concept Detail
```