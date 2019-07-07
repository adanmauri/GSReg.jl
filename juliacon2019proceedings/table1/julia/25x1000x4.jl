using GlobalSearchRegression, DataFrames, Distributions, CSV
# Insert here your working directory path
data = DataFrame(Array{Union{Missing,Float64}}(randn(1000,26)))
headers = [ :y ; [ Symbol("x$i") for i = 1:size(data,2) - 1 ] ]
names!(data, headers )
b=@elapsed gsreg("y x*", data; ttest=true, criteria=[:aic], parallel=4, csv="25x1000x4.csv")
t=DataFrame(A=Float64[])
push!(t,b)
CSV.write("juliatimmings.csv", t; append=true)
exit()

