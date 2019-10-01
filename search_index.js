var documenterSearchIndex = {"docs":
[{"location":"api/#","page":"API","title":"API","text":"Modules = [GlobalSearchRegression]","category":"page"},{"location":"api/#GlobalSearchRegression.export_csv-Tuple{String,GlobalSearchRegression.GSRegResult}","page":"API","title":"GlobalSearchRegression.export_csv","text":"Exports main results with headers to file\n\n\n\n\n\n","category":"method"},{"location":"api/#GlobalSearchRegression.get_data_position-NTuple{7,Any}","page":"API","title":"GlobalSearchRegression.get_data_position","text":"Returns the position of the header value based on this structure.     - Index     - Covariates         * b         * bstd         * T-test     - Equation general information merged with criteria user-defined options.     - Order from user combined criteria     - Weight\n\n\n\n\n\n","category":"method"},{"location":"api/#GlobalSearchRegression.get_result_header-NTuple{7,Any}","page":"API","title":"GlobalSearchRegression.get_result_header","text":"Constructs the header for results based in getdataposition orders.\n\n\n\n\n\n","category":"method"},{"location":"api/#GlobalSearchRegression.get_selected_cols-Tuple{Any}","page":"API","title":"GlobalSearchRegression.get_selected_cols","text":"Returns selected appropiate covariates for each iteration\n\n\n\n\n\n","category":"method"},{"location":"#GlobalSearchRegression-[![Build-Status](https://travis-ci.org/ParallelGSReg/GlobalSearchRegression.jl.svg?branchmaster)](https://travis-ci.org/ParallelGSReg/GlobalSearchRegression.jl)-[![](https://img.shields.io/badge/docs-latest-blue.svg)](https://parallelgsreg.github.io/GlobalSearchRegression.jl/)-1","page":"Introduction","title":"GlobalSearchRegression (Image: Build Status) (Image: )","text":"","category":"section"},{"location":"#Abstract-1","page":"Introduction","title":"Abstract","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"GlobalSearchRegression is both the world-fastest all-subset-regression command (a widespread tool for automatic model/feature selection) and a first-step to develop a coeherent framework to merge Machine Learning and Econometric algorithms.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Written in Julia, it is a High Performance Computing version of the Stata-gsreg command (get the original code here). In a multicore personal computer (we use a Threadripper 1950x build for benchmarks), it runs up-to 100 times faster than the original Stata-code and up-to 10 times faster than well-known R-alternatives (pdredge).","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Notwithstanding, GlobalSearchRegression main focus is not only on execution-times but also on progressively combining Machine Learning algorithms with Econometric diagnosis tools into a friendly Graphical User Interface (GUI) to simplify embarrassingly parallel quantitative-research.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"In a Machine Learning environment (e.g. problems focusing on predictive analysis / forecasting accuracy) there is an increasing universe of “training/test” algorithms (many of them showing very interesting performance in Julia) to compare alternative results and find-out a suitable model.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"However, problems focusing on causal inference require five important econometric features: 1) Parsimony (to avoid very large atheoretical models); 2) Interpretability (for causal inference, rejecting “intuition-loss” transformation and/or complex combinations); 3) Across-models sensitivity analysis (uncertainty is the only certainty; parameter distributions are preferred against “best-model” unique results); 4) Robustness to time series and panel data information (preventing the use of raw bootstrapping or random subsample selection for training and test sets); and 5) advanced residual properties (e.g. going beyond the i.i.d assumption and looking for additional panel structure properties -for each model being evaluated-, which force a departure from many traditional machine learning algorithms).","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"For all these reasons, researchers increasingly prefer advanced all-subset-regression approaches, choosing among alternative models by means of in-sample and/or out-of-sample criteria, model averaging results, bayesian priors for theoretical bounds on covariates coefficients and different residual constraints. While still unfeasible for large problems (choosing among hundreds of covariates), hardware and software innovations allow researchers to implement this approach in many different scientific projects, choosing among one billion models in a few hours using standard personal computers.","category":"page"},{"location":"#Installation-1","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"GlobalSearchRegression requires Julia 1.0.1  (or newer releases) to be previously installed in your computer. Then, start Julia and type \"]\" (without double quotes) to open the package manager.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> ]\npkg>","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"After that, just install GlobalSearchRegression by typing \"add GlobalSearchRegression\"","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"pkg> add GlobalSearchRegression","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Optionally, some users could also find interesting to install CSV and DataFrames packages to allow for additional I/O functionalities.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"pkg> add CSV DataFrames","category":"page"},{"location":"#Basic-Usage-1","page":"Introduction","title":"Basic Usage","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"To run the simplest analysis just type:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> using GlobalSearchRegression, DelimitedFiles\njulia> dataname = readdlm(\"path_to_your_data/your_data.csv\", ',', header=true)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"and","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> gsreg(\"your_dependent_variable your_explanatory_variable_1 your_explanatory_variable_2 your_explanatory_variable_3 your_explanatory_variable_4\", dataname)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"or","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> gsreg(\"your_dependent_variable *\", data)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"It performs an Ordinary Least Squares - all subset regression (OLS-ASR) approach to choose the best model among 2<sup>n</sup>-1 alternatives (in terms of in-sample accuracy, using the adjusted R<sup>2</sup>), where:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"DelimitedFiles is the Julia buit-in package we use to read data from csv files (throught its readdlm function);\n\"pathtoyourdata/yourdata.csv\" is a strign that indentifies your comma-separated database, allowing for missing observations. It's assumed that your database first row is used to identify variable names;\ngsreg is the GlobalSearchRegression function that estimates all-subset-regressions (e.g. all-possible covariate combinations). In its simplest form, it has two arguments separated by a comma;\nThe first gsreg argument is the general unrestricted model (GUM). It must be typed between double quotes. Its first string is the dependent variable name (csv-file names must be respected, remember that Julia is case sensitive). After that, you can include as many explanatory variables as you want. Alternative, you can replace covariates by wildcars as in the example above (e.g. _ for all other variables in the csv-files, or qwert_ for all other variables in the csv-file with names starting by \"qwert\"); and\nThe second gsreg argument is name of the object containing your database. Following the example above, it must match the name you use in dataname = readdlm(\"pathtoyourdata/yourdata.csv\", ',', header=true)","category":"page"},{"location":"#Advanced-usage-1","page":"Introduction","title":"Advanced usage","text":"","category":"section"},{"location":"#Alternative-data-input-1","page":"Introduction","title":"Alternative data input","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Databases can also be handled with CSV/DataFrames packages. To do so, remember to install them by using the add command in the Julia's package manager. Once it is done, just type:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> using GlobalSearchRegression, CSV, DataFrames\njulia> data = CSV.read(\"path_to_your_data/your_data.csv\")\njulia> gsreg(\"y *\", data)","category":"page"},{"location":"#Alternative-GUM-syntax-1","page":"Introduction","title":"Alternative GUM syntax","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The general unrestricted model (GUM; the gsreg function first argument) can be written in many different ways, looking for a smooth transition for R and Stata users.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"# Stata like\njulia> gsreg(\"y x1 x2 x3\", data)\n\n# R like\njulia> gsreg(\"y ~ x1 + x2 + x3\", data)\njulia> gsreg(\"y ~ x1 + x2 + x3\", data=data)\n\n# Strings separated with comma\njulia> gsreg(\"y,x1,x2,x3\", data)\n\n# Array of strings\njulia> gsreg([\"y\", \"x1\", \"x2\", \"x3\"], data)\n\n# Using wildcards\njulia> gsreg(\"y *\", data)\njulia> gsreg(\"y x*\", data)\njulia> gsreg(\"y x1 z*\", data)\njulia> gsreg(\"y ~ x*\", data)\njulia> gsreg(\"y ~ .\", data)","category":"page"},{"location":"#Additional-options-1","page":"Introduction","title":"Additional options","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"GlobalSearchRegression advanced properties include almost all Stata-GSREG options but also additional features. Overall, our Julia's version has the following options:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"intercept: by default the GUM includes an intercept as a fixed covariate (e.g. it's included in every model). Alternatively, users can erase it by selecting the intercept=false boolean option.\noutsample: it identify how many observations will be left to forecasting purposes (e.g. outsample=10 indicates that the last 10 observations will not be used in the OLS estimation, remaining avaliable for out-of-sample accuracy calculations).\ncriteria: there are 7 different criteria (which must be included as symbols) to evaluate alternative models. For in-sample adjustment, user can choose one or many among the following: Adjusted R<sup>2</sup> (:r2adj, the default), Bayesian information criteria (:bic), Akaike and Corrected Akaike information criteria (:aic and :aicc), Mallows's Cp statistic (:cp), Sum of squared errors (also known as Residual sum of squares, :sse) and the Root mean square error (:rmse). For out-of-sample accuracy, there is available the out-of-sample root mean square error (:rmsout). Users are free to combine in-sample and out-of-sample information criteria, as well as many different in-sample criteria. For each alternative model, GlobalSearchRegrssion will calculate a composite ordering variable defined as the equally-weighted average of normalized (to guarantee equal weights) and harmonized (to ensure that higher values always identify better models) user's specified criteria.\nttest: by default there is no t-test (to resamble similar R packages), but users can active it by using the boolean option ttest=true.\nmethod: this option can be used to alternatively run estimations with Float32 of Float64 datatype. The default is Float32 (to speed-up calculations) but users can modify it through the method=\"precise\" string option.\nvectoroperation: it's well known that Julia's packages run faster with de-vectorized code (unlike most languages like R, Python or Matlab). We include this option to switch between vector operations and loops for benchmark purposes. By default, the boolean vectoroperation option is set to false. Users are free to change it through vectoroperation=true.\nmodelavg: by default, GlobalSearchRegression identifies the best model in terms of user' specified criteria. Complementarily, by setting the boolean modelavg option to true (modelavg=true), users will be able to obtain across-models' average coefficients, t-tests and additional statistics (using exponential weights based on the -potentially composite- ordering variable defined in the criteria option). Each alternative model has a weight given by w1/sum(w1), where w1 is defined as exp(-delta/2) and delta is equal to max(ordering variable)-(ordering variable).\ntime: this option determines which variable will be used to date (and pre-sort) observations. Time variable must be included as a symbol (e.g. time=:x1). Neither, gaps nor missing observations are allowed in this variable (missing observations are allowed in any other variable). By using this option, additional residuals tests are enabled.\nresidualtest: White heteroskedasticity and Jarque-Bera normality test will be performed when this boolean option is set to true (default is residualtest=false). Additionally, when time variable is defined, a third residual test is calculated (the Breusch-Godfrey test for autocorrelation). For each model, residual tests p-values will be saved into the user defined CSV file.\ncsv / resultscsv: the string used in this option will define the name of the CSV file to be created into the working directory with output results. By default, no CSV file is created (only main results are displayed in the REPL).\norderresults: a boolean option to determine whether models should be sorted (by the user' specified information criteria) or not. By default there is no sorting performed (orderresults=false). It must be noticed that setting orderresults=true, method=\"precise\" and vectoroperation=true will significantly increase execution times.\nparallel: the most important option. It defines how many workers will be asigned to GlobalSearchRegresssion in order to parallelize calcultions. Using physical cores, speed-up is impressive. It is even superlinear with small databases (exploiting LLC multiplication). Notwidhstanding, speed-up efficiency decreases with logical cores (e.g. enabling hyperthreading). In order to use this option, julia must be initialized with the -p auto option or additional processors must be enables (with the addprocs(#) option, see the example below). Otherwise, Julia will only use one core and the parallel option of GlobalSearchRegression will not be available.","category":"page"},{"location":"#Full-syntax-example-1","page":"Introduction","title":"Full-syntax example","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"This is a full-syntax example, assuming Julia 1.0.1 (or newer version), GlobalSearchRegression and DataFrames are already installed in a quad-core personal computer.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"# The first four lines are used to simulate data with random variables\njulia> using DataFrames\njulia> data = DataFrame(Array{Union{Missing,Float64}}(randn(100,16)))\njulia> headers = [ :y ; [ Symbol(\"x$i\") for i = 1:size(data,2) - 1 ] ]\njulia> names!(data, headers)\n# The following two lines enable multicore calculations\njulia> using Distributed\njulia> addprocs(4)\n# Next line defines the working directory (where output results will be saved), for example:\njulia> cd(\"c:\\\\\")  # in Windows, or\njulia> cd(\"/home/\")  # in Linux\n# Final two lines are used to perform all-subset-regression\njulia> using GlobalSearchRegression\njulia> gsreg(\"y x2 x3 x4 x5 x6 x7 x8 x9 x10 x11 x12 x13 x14 x15\", data,\n    intercept=true,\n    outsample=10,\n    criteria=[:r2adj, :bic, :aic, :aicc, :cp, :rmse, :rmseout, :sse],\n    ttest=true,\n    method=\"precise\",\n    vectoroperation=true,\n    modelavg=true,\n    residualtest=true,\n    time=:x1,\n    csv=\"output.csv\",\n    parallel=4,\n    orderresults=false)","category":"page"},{"location":"#Credits-1","page":"Introduction","title":"Credits","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"The GSReg module, which perform regression analysis, was written primarily by Demian Panigo, Valentín Mari and Adán Mauri Ungaro. The GlobalSearchRegression.jl module was inpired by GSReg for Stata, written by Pablo Gluzmann and Demian Panigo.","category":"page"}]
}
